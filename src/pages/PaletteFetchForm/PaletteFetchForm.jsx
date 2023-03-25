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


    return (
        <>
            <div className="palette">
                {colorList.map((color, idx) => (
                    <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})`}}></div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <button type="submit">Generate Palette</button>
            </form>
        </>
    )
}