import './SavedPalettesList.css'
import {useState, useEffect } from 'react';
import * as palettesAPI from '../../utilities/palettes-api';
import SavedPalette from '../SavedPalette/SavedPalette';

export default function SavedPalettesPage() {

  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    async function getSavedPalettes() {
      try {
        const palettes = await palettesAPI.getAllForUser();
        setSavedPalettes(palettes);
        console.log(palettes)
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
            <SavedPalette key={idx} colors={palette.colors} />
            ))}
        </div>
    </div>
    </>
  );
}

