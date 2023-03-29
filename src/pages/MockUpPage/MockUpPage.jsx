import './MockUpPage.css';
import { useState } from 'react';
import PaletteForm from '../../components/PaletteForm/PaletteForm';
import UIBasic from '../../mocks/UIBasic/UIBasic';

export default function MockUpPage() {

    const [activePalette, setActivePalette] = useState(null);

    const mocks = [
      
      activePalette && <UIBasic palette={activePalette} />
    ];

    return (
      <>
        <PaletteForm  setActivePalette={setActivePalette} />
        { mocks[0] }
      </>
  )
}