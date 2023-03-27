import { useState } from 'react';
import "./PaletteFetchForm.css";
import * as palettesAPI from '../../utilities/palettes-api'

export default function PaletteFetchForm({ handleFetchColors }) {
    const [colorList, setColorList] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();
        async function fetchColors(evt) {
            const newPalette = await palettesAPI.fetchColors(evt) 
            setColorList(newPalette.result);
            //below is to be passed to MockUpPage.jsx
            handleFetchColors(newPalette.result);
        }
        fetchColors(evt);
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        console.log(colorList)
        try {
            const paletteColors = { colors: colorList };
            const savedPalette = await palettesAPI.savePalette(paletteColors)
            alert(JSON.stringify(savedPalette))
            // savedPalette(savedPalette);
        } catch(err) {
            console.error('error saving palette' , err)
        }
    }

    
    return (
        <>
            <div className="palette">
                {colorList.map((color, idx) => (
                    <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})`}}></div>
                ))}
                <form onSubmit={handleSubmit}>
                    <button type="submit">Generate Palette</button>
                </form>
                <form onSubmit={handleSavePalette}>
                    <button type="submit">Save Palette</button>
                </form>
            </div>
        </>
    )
}