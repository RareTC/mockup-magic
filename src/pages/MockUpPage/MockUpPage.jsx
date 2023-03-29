import './MockUpPage.css';
import { useState } from 'react';
import PaletteForm from '../../components/PaletteForm/PaletteForm';

export default function MockUpPage() {

    const [activePalette, setActivePalette] = useState(null);
    const [backgroundGradient, setBackgroundGradient] = useState('');

    // style the background
    function handleActivePalette(updatedColors) {
      console.log(updatedColors,'handle fetch in mockup')
      const backgroundGradient = `radial-gradient(
          circle at 50% 100%, 
          ${updatedColors[0]} 19.9%, 
          ${updatedColors[1]} 35.9%, 
          ${updatedColors[2]} 24.5%
      )`;
      setBackgroundGradient(backgroundGradient);
    }

    return (
      <>
          <PaletteForm  setActivePalette={setActivePalette} />
          <section style={{ background: backgroundGradient, backgroundSize: '100% 100%' }}>
            MOCKUP PAGE 
          </section>
      </>
  )
}