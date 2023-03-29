import { useState, useEffect } from 'react';
import "./PaletteForm.css";
import * as palettesAPI from '../../utilities/palettes-api';
import Select from 'react-select';

const defaultPalette = {
    title: 'default',
    colors: [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffffff',
        '#000000',
    ]
};

export default function PaletteFetchForm({ setActivePalette, handleActivePalette }) {

    const [palettes, setPalettes] = useState([]);
    const [palette, setPalette] = useState(defaultPalette);

    useEffect(() => {
        setActivePalette(palette)
    }, [palette])

    useEffect(() => {
        async function getPalettes() {
            const palettes = await palettesAPI.getAllForUser();
            setPalettes(palettes);
            if (palettes.length) setPalette(palettes[0]);
        } 
        getPalettes();
    }, []);

    async function generatePalette() {
        const palette = await palettesAPI.generatePalette();
        const newColors = palette.colors.map(c => `#${c[0].toString(16)}${c[1].toString(16)}${c[2].toString(16)}`);
        setPalette({...palette, colors: newColors});
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        try {
            const savedPalette = await palettesAPI.savePalette(palette)
            alert(JSON.stringify(palette))
            console.log(palette, 'handleSavePalette result - frontend')
        } catch (err) {
            console.error('error saving palette', err)
        }
    }

    function handleChange(evt, colorIdx) {
        const updatedColors = palette.colors.map((color, idx) => idx === colorIdx ? evt.target.value : color);
        setPalette({...palette, colors: updatedColors});
        handleActivePalette(updatedColors);
    }

    const options = palettes.map(p => ({
        value: p._id,
        label: p.title,
        colors: p.colors.map(color => (
            <div key={color} 
            style={{ backgroundColor: color, width: '20px', height: '20px', display: 'inline-block'}}>
            </div>
        ))
    }));

    const formatOptionLabel = ({ value, label, colors }) => (
        <div>
            <span>{label}</span>
            <div>{colors}</div>
        </div>
    ); 

    if (!palette) return null;
    
    return (
        <div>
            {palette.colors.map((color, idx) => (
                <input
                    className="palette-generator"
                    key={idx}
                    type="color"
                    value={color}
                    onChange={(evt) => handleChange(evt, idx)}
                />
            ))}
            <button onClick={generatePalette}>Generate Palette</button>
            <form onSubmit={handleSavePalette}>
                <input type="text" value={palette?.title} onChange={(evt) => setPalette({...palette, title: evt.target.value})}/>
                <button type="submit">Save Palette</button>
            </form>

            <Select
                options={options}
                //Honestly not sure why the two codes below work, just found it deep in the forums, ask Jim. 
                value={{ value: palette._id, label: `${palette.title}` }}
                onChange={(evt) => setPalette(palettes.find(p => p._id === evt.value))}
                formatOptionLabel={formatOptionLabel}
            />
        </div >
    )
}

{/* <select value={palette._id} onChange={(evt)=> setPalette(palettes.find(p => p._id === evt.target.value))} >
{
    palettes.map(p => <option value={p._id}>{p.title}</option>)
}
</select> */}