import './SavedPalettesList.css'
import {useState, useEffect } from 'react';
import * as palettesAPI from '../../utilities/palettes-api';
import SavedPalette from '../SavedPalette/SavedPalette';

export default function SavedPalettesPage() {

  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    async function getSavedPalettes() {
      try {
        const myPalettes = await palettesAPI.getAllForUser();
        console.log(myPalettes, 'myPalettes')
        const palette = myPalettes.map((colors => {
          // return colors.palette.map(singleColor => {
            // return singleColor
          // })
        }))
        // console.log(singleColor, "mapped palette")
        setSavedPalettes(palette);
      } catch (err) {
        console.log(err , "there is an error form the db")
      }
    }
    getSavedPalettes();
  }, []);

  return (
    <>
    <div>
      <h1>Saved Palettes</h1>
        <div className="palette">
          {savedPalettes.map((palette, idx) => (
            <SavedPalette key={idx} myPalettes={palette.myPalettes} />
            ))}
        </div>
    </div>
    </>
  );
}

