import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import "./PaletteForm.css";
import * as palettesAPI from '../../utilities/palettes-api';
import Select from 'react-select';

const defaultPalette = {
    _id: 'defaultid',
    title: 'default',
    colors: [
        '#2233a4',
        '#38aba2',
        '#c6b27d',
        '#b37a62',
        '#d1573b',
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
        const newColors = palette.colors.map(c => 
            `#${c[0].toString(16).padStart(2, '0')}${c[1].toString(16).padStart(2, '0')}${c[2].toString(16).padStart(2, '0')}`
        );
        setPalette({...palette, colors: newColors});
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        try {
            const palettes = await palettesAPI.savePalette(palette);
            setPalettes(palettes);
        } catch (err) {
            console.error('error saving palette', err)
        }
    }

    function handleChange(evt, colorIdx) {
        const updatedColors = palette.colors.map((color, idx) => idx === colorIdx ? evt.target.value : color);
        setPalette({...palette, colors: updatedColors});
    }

    const options = palettes.map(p => ({
        value: p._id,
        label: p.title,
        colors: p.colors.map(color => (
            <div key={color} 
            //style background color below at end of the style jsx once I decide how. 
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
            <div className="palette">
            <button className="generator-btn" onClick={generatePalette}>
                <span><FontAwesomeIcon icon={faArrowsRotate} /></span>
            </button>
        </div >
            {palette.colors.map((color, idx) => (
        <div className="PaletteForm-PaletteList">
                <input
                className="palette-generator"
                key={idx}
                type="color"
                value={color}
                onChange={(evt) => handleChange(evt, idx)}
                /> 
                <div className="PaletteForm-icons">
                    <button className="PaletteForm-icon-btn">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </button>
                    <button className="PaletteForm-icon-btn">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </button>
                </div>
        </div>
                ))}
            <form onSubmit={handleSavePalette}>
                <input type="text" value={palette?.title} onChange={(evt) => setPalette({...palette, title: evt.target.value})}/>
                <button type="submit">Save Palette</button>
            </form>
            <Select
                className="palette-menu"
                options={options}
                value={{ value: palette._id, label: palette.title }}
                onChange={(evt) => setPalette(palettes.find(p => p._id === evt.value))}
                formatOptionLabel={formatOptionLabel}
            />
        </div >
    )
}