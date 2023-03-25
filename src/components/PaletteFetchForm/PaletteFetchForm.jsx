import { useState } from 'react';
import "./PaletteFetchForm.css";

export default function PaletteFetchForm() {
    const [colorList, setColorList] = useState([]);
    const [results, setResults] = useState([]);

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
        setResults(colors.result);
        console.log(colors);
    }


    return (
        <>
            <div className="palette">
                {results.map((color, idx) => (
                    <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})`}}></div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <button type="submit">Generate Palette</button>
            </form>
        </>
    )
}