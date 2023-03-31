import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

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

    // 'N', 'N', 'N', 'N', 'N'

    const [lockedColors, setLockedColors] = useState([false, false, false, false, false]);
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

    async function generatePalette(lockedColors) {
        console.log(lockedColors, ' in the generator')
        const lockedColorsArr = Object.values(lockedColors);
        console.log(lockedColorsArr, 'converted to an arr')
        const colorSelected = lockedColorsArr.map(c => {
            if(c !== false ) {
                return hexToRGB(c);
            } else {
                return 'N';
            }
        })
        console.log(colorSelected, 'after map')
        const palette = await palettesAPI.generatePalette(colorSelected);
        const newColors = palette.colors.map(c =>
            `#${c[0].toString(16).padStart(2, '0')}${c[1].toString(16).padStart(2, '0')}${c[2].toString(16).padStart(2, '0')}`
        );
        setPalette({ ...palette, colors: newColors });
    }

    function hexToRGB(hex) {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return [r, g, b];
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
        setPalette({ ...palette, colors: updatedColors });
    }

    const options = palettes.map(p => ({
        value: p._id,
        label: p.title,
        colors: p.colors.map(color => (
            <div key={color}
                style={{ backgroundColor: color, width: '30px', height: '30px', display: 'inline-block' }}>
            </div>
        ))
    }));

    const formatOptionLabel = ({ value, label, colors }) => (
        <div>
            <span>{label}</span>
            <div>{colors}</div>
        </div>
    );

    function swapColors(idx1, idx2) {
        const paletteCopy = { ...palette };
        paletteCopy.title = 'New Palette';
        const colors = paletteCopy.colors;
        [colors[idx1], colors[idx2]] = [colors[idx2], colors[idx1]];
        setPalette(paletteCopy);
        [lockedColors[idx1], lockedColors[idx2]] = [lockedColors[idx2], lockedColors[idx1]];
        setPalette(paletteCopy);
    }

    const lockColor = (idx) => {
        console.log(idx,'locking color')
        const newLockedColors = { ...lockedColors };
        if (newLockedColors[idx] === false) {
            newLockedColors[idx] = palette.colors[idx];
            console.log(newLockedColors, 'step two of a lock')
        } else {
            newLockedColors[idx] = false;
        }
        setLockedColors(newLockedColors);
        console.log(newLockedColors, 'last step newLockedColors')
        console.log(lockedColors, 'last step lockedColors')
      };

    
    if (!palette) return null;

    return (
        <>
            <div className="PaletteForm-wholewrapper">
                <div className="PaletteForm-input-components">
                    {palette.colors.map((color, idx) => (
                        <div className="PaletteForm-PaletteList" key={idx} >
                            <div className='PaletteForm-palettecontainer'>
                                <input
                                    className="palette-generator"
                                    key={idx}
                                    type="color"
                                    value={color}
                                    onChange={(evt) => handleChange(evt, idx)}
                                />
                            </div>
                            <div className="PaletteForm-icons">
                                {idx === 0 ?
                                    null
                                    :
                                    <button className="PaletteForm-icon-btn" onClick={() => swapColors(idx, idx - 1)}>
                                        <FontAwesomeIcon icon={faAnglesLeft} />
                                    </button>
                                }
                                {lockedColors[idx] === false ?
                                    <button className='PaletteForm-unlock' onClick={() => lockColor(idx)}>
                                        <FontAwesomeIcon icon={faLockOpen} />
                                    </button>
                                    :
                                    <button className='PaletteForm-lock' onClick={() => lockColor(idx)}>
                                        <FontAwesomeIcon icon={faLock} />
                                    </button>
                                }
                                {idx === 4 ?
                                    null
                                    :
                                    <button className="PaletteForm-icon-btn" id="last-ra" onClick={() => swapColors(idx, idx + 1)}>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </button>
                                }
                            </div>
                        </div>
                    ))}
                    <div className="PaletteForm-palettecomponents">
                        <button className="generator-btn" onClick={() => generatePalette(lockedColors)}>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </button>
                        <Select
                            className="palette-menu"
                            options={options}
                            value={{ value: palette._id, label: palette.title }}
                            onChange={(evt) => setPalette(palettes.find(p => p._id === evt.value))}
                            formatOptionLabel={formatOptionLabel}
                        />
                        <form className="PaletteForm-paletteform" onSubmit={handleSavePalette}>
                            <input className="PaletteForm-input" type="text" value={palette?.title} onChange={(evt) => setPalette({ ...palette, title: evt.target.value })} />
                            <button className="PaletteForm-save" type="submit">
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}