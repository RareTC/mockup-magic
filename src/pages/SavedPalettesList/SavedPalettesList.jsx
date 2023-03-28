import './SavedPalettesList.css'
import {useState, useEffect } from 'react';
import * as palettesAPI from '../../utilities/palettes-api';
import SavedPalette from '../SavedPalette/SavedPalette';

export default function SavedPalettesList() {

  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    async function getPalettes() {
      const palettes = await palettesAPI.getAllForUser();
      setPalettes(palettes);
      console.log(palettes, 'trying new useEffect')
    }
    getPalettes();
  }, []);
  
  
  const savedPalette = palettes.map((color, idx ) => (
    color.colors.map((c, idx) =>(
    <SavedPalette color={c} idx={idx} key={idx}/>
  ))));
  console.log(palettes, 'this is after import')
  
  return (
    <>
    <div>
      <h1>Saved Palettes</h1>
      {savedPalette.length === 0 ?
      <p>No Palettes Saved</p>
      :
      <ul>
        {savedPalette}
      </ul>
      }
    </div>
    </>
  );
}


