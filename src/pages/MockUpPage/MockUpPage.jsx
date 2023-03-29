import './MockUpPage.css';
import { useState } from 'react';
import PaletteForm from '../../components/PaletteForm/PaletteForm';
import UIBasic from '../../mocks/UIBasic/UIBasic';
import UIBasic2 from '../../mocks/UIBasic2/UIBasic2';

export default function MockUpPage() {
  const [activePalette, setActivePalette] = useState(null);
  
  const mocks = [
    { title: 'Basic UI', ui: activePalette && <UIBasic palette={activePalette} /> },
    { title: 'Second UI', ui: activePalette && <UIBasic2 palette={activePalette} /> },
  ];

  const [activeMock, setActiveMock] = useState(mocks[0].title);


  return (
    <>
      <PaletteForm setActivePalette={setActivePalette} />
      {mocks.find(m => m.title === activeMock).ui}
      <select value={activeMock} onChange={(evt) => setActiveMock(evt.target.value)}>
        {mocks.map(m => <option value={m.title}>{m.title}</option>)}
      </select>
    </>
  )
}