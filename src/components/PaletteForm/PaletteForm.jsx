import { useState, useEffect } from 'react';
import "./PaletteForm.css";
import * as palettesAPI from '../../utilities/palettes-api';

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

export default function PaletteFetchForm({ setActivePalette }) {

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
    }


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
        </div >
    )
}