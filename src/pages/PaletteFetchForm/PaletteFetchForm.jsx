import { useState } from 'react';
import "./PaletteFetchForm.css";
import * as palettesAPI from '../../utilities/palettes-api'

export default function PaletteFetchForm() {
    const [colorList, setColorList] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();
        async function fetchColors(evt) {
            const newPalette = await palettesAPI.fetchColors(evt) 
            setColorList(newPalette.result);
        }
        fetchColors(evt);
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        try {
            const paletteColors = { colors: colorList };
            const savedPalette = await palettesAPI.savePalette(paletteColors)
            alert(savedPalette, 'saved!')
        } catch(err) {
            console.error('error saving palette' , err)
        }
    }

    const backgroundGradient = `radial-gradient(
        circle at 50% 100%, 
        rgb(${colorList[0]}) 19.9%, 
        rgb(${colorList[1]}) 35.9%, 
        rgb(${colorList[2]}) 24.5%
    )`;
    
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

            <section 
            style={{ background: backgroundGradient, backgroundSize: '100% 100%' }}
            >
            </section>
        </>
    )
}