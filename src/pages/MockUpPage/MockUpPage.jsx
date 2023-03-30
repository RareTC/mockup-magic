import './MockUpPage.css';
import { useState } from 'react';
import PaletteForm from '../../components/PaletteForm/PaletteForm';
import UIBasic from '../../mocks/UIBasic/UIBasic';
import UIBasic2 from '../../mocks/UIBasic2/UIBasic2';
import UIBasic3 from '../../mocks/UIBasic3/UIBasic3';

export default function MockUpPage() {
  const [activePalette, setActivePalette] = useState(null);

  const mocks = [
    { title: 'Basic UI', ui: activePalette && <UIBasic palette={activePalette} /> },
    { title: 'Second UI', ui: activePalette && <UIBasic2 palette={activePalette} /> },
    { title: 'Third UI', ui: activePalette && <UIBasic3 palette={activePalette} /> },
  ];

  const [activeMock, setActiveMock] = useState(mocks[0].title);


  return (
    <>
      <PaletteForm setActivePalette={setActivePalette} />
      <select value={activeMock} onChange={(evt) => setActiveMock(evt.target.value)}>
        {mocks.map(m => <option key={m.title} value={m.title}>{m.title}</option>)}
      </select>
      {mocks.find(m => m.title === activeMock).ui}
    </>
  )
}