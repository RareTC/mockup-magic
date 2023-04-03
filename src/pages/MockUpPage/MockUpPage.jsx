import './MockUpPage.css';
import { useState } from 'react';
import PaletteForm from '../../components/PaletteForm/PaletteForm';
import UIBasic from '../../mocks/UIBasic/UIBasic';
import UIBasic2 from '../../mocks/UIBasic2/UIBasic2';
import UIBasic3 from '../../mocks/UIBasic3/UIBasic3';
import Gradients from '../../mocks/Gradients/Gradients';
import Select from 'react-select';


export default function MockUpPage() {
  const [activePalette, setActivePalette] = useState(null);

  const mocks = [
    { title: 'Basic UI', ui: activePalette && <UIBasic palette={activePalette} /> },
    { title: 'Blog Layout', ui: activePalette && <UIBasic2 palette={activePalette} /> },
    { title: 'Card Layout', ui: activePalette && <UIBasic3 palette={activePalette} /> },
    { title: 'Background Gradient', ui: activePalette && <Gradients palette={activePalette} /> },
  ];

  const [activeMock, setActiveMock] = useState(mocks[0].title);


  const options = mocks.map(m => ({
    value: m.title,
    label: m.title
  }));

  const defaultOption = { value: activeMock, label: activeMock }

  return (
    <>
      <PaletteForm setActivePalette={setActivePalette} />
      <Select
        className="Mockup-menu"
        options={options}
        defaultValue={defaultOption}
        value={options.find((option) => option.value === activeMock)}
        onChange={(selectedOption) => setActiveMock(selectedOption.value)}
      />
      {mocks.find(m => m.title === activeMock).ui}
    </>
  )
};


{/* <select value={activeMock} onChange={(evt) => setActiveMock(evt.target.value)}>
{mocks.map(m => <option key={m.title} value={m.title}>{m.title}</option>)}
</select> */}

// onChange={(evt) => setPalette(palettes.find(p => p._id === evt.value))}
// formatOptionLabel={formatOptionLabel}

//   const options = palettes.map(p => ({
//     value: p._id,
//     label: p.title,
//     colors: p.colors.map(color => (
//         <div key={color}
//             style={{ backgroundColor: color, width: '30px', height: '30px', display: 'inline-block' }}>
//         </div>
//     ))
// }));