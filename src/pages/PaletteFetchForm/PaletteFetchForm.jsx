import { useState } from 'react';
import "./PaletteFetchForm.css";

export default function PaletteFetchForm() {
    const [colorList, setColorList] = useState([]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const url = `http://colormind.io/api/`;
        const data = {
            model: 'default'
        };
        const response = await fetch(url,  {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const colors = await response.json();
        //using above colors variable colors.result, result is being passed from the JSON body. 
        setColorList(colors.result);
        console.log(colors);
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