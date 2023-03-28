import { useState } from 'react';
import "./PaletteFetchForm.css";
import * as palettesAPI from '../../utilities/palettes-api'

export default function PaletteFetchForm({ handleFetchColors }) {
    // const [colorList, setColorList] = useState([]);
    // const [colorState, setColorState] = useState([
    //     { colors:[200, 200, 200], save:false },
    //     { colors:[200, 200, 200], save:false },
    //     { colors:[200, 200, 200], save:false },
    //     { colors:[200, 200, 200], save:false },
    //     { colors:[200, 200, 200], save:false },
    // ]);

    const [palette, setPalette] = useState([
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffffff',
        '#000000',
    ]);


    // function handleSubmit(evt) {
    //     evt.preventDefault();
    //     async function fetchColors(evt) {
    //         const newPalette = await palettesAPI.fetchColors(evt) 
    //         setPalette(newPalette.result);
    //         //below is to be passed to MockUpPage.jsx
    //         handleFetchColors(newPalette.result);
    //     }
    //     fetchColors(evt);
    //     console.log(palette,'handlesubmit')
    // }

    async function generatePalette() {
        const palette = await palettesAPI.generatePalette();
        const newPalette = palette.map(c => `#${c[0].toString(16)}${c[1].toString(16)}${c[2].toString(16)}`);
        setPalette(newPalette);
    }

    async function handleSavePalette(evt) {
        evt.preventDefault();
        console.log(palette,'handleSavePalette')
        try {
            const paletteColors = { colors: [...palette] };
            const savedPalette = await palettesAPI.savePalette(paletteColors)
            alert(JSON.stringify(paletteColors))
        } catch(err) {
            console.error('error saving palette' , err)
        }
    }

    function handleChange(evt, colorIdx) {
        const updatedColors = palette.map((color, idx) => idx === colorIdx ? evt.target.value : color);
        setPalette(updatedColors);
    }


    return (
        <>
            {palette.map((color, idx) => (
            // <input 
            //     key={idx}
            //     type="color" 
            //     value={`#${color.colors[0].toString(16)}${color.colors[1].toString(16)}${color.colors[2].toString(16)}`}
            //     onChange={(evt) => handleChange(evt, idx)}
            // />
            <input 
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
        </>

)
}


{/* line 73.5 <input type="color" value={`#${colorState.color1.colors[0].toString(16)}
${color[1].toString(16)}${color[2].toString(16)}`} /> */}
// value={`${color.colors[0]}${color.colors[1]}${color.colors[2]}`}
// value={`${0}${0}${0}`}
{/* <div className="palette">
    {colorList.map((color, idx) => (
        <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})`}}></div>
    ))}
</div> */}