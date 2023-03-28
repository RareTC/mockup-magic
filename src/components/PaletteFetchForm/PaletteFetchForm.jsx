import { useState, useEffect } from 'react';
import "./PaletteFetchForm.css";
import * as palettesAPI from '../../utilities/palettes-api'

export default function PaletteFetchForm({ handleFetchColors }) {

    const [palette, setPalette] = useState([
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffffff',
        '#000000',
    ]);
    
    async function generatePalette() {
        const palette = await palettesAPI.generatePalette();
        const newPalette = palette.map(c => `#${c[0].toString(16)}${c[1].toString(16)}${c[2].toString(16)}`);
        setPalette(newPalette);
        handleFetchColors(newPalette)
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        try {
            const paletteColors = { colors: [...palette] };
            const savedPalette = await palettesAPI.savePalette(paletteColors)
            alert(JSON.stringify(paletteColors))
            console.log(paletteColors,'handleSavePalette result - frontend')
        } catch(err) {
            console.error('error saving palette' , err)
        }
    }

    function handleChange(evt, colorIdx) {
        const updatedColors = palette.map((color, idx) => idx === colorIdx ? evt.target.value : color);
        setPalette(updatedColors);
        handleChange(updatedColors);
    }


    return (
        <div>
            {palette.map((color, idx) => (
            <input 
            className="palette-generator"
            key={idx}
            type="color" 
            value={palette[idx]}
            onChange={(evt) => handleChange(evt, idx)}
            /> 
            
            ))}
            <button onClick={generatePalette}>Generate Palette</button>

            <form onSubmit={handleSavePalette}>
                <button type="submit">Save Palette</button>
            </form>
        </div >
    )
}