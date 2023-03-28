import './MockUpPage.css';
import { useState } from 'react';
import PaletteFetchForm from '../../components/PaletteFetchForm/PaletteFetchForm';

export default function MockUpPage() {
    const [backgroundGradient, setBackgroundGradient] = useState('');

    // style the background
    function handleFetchColors(updatedColors) {
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
          <PaletteFetchForm  handleFetchColors={handleFetchColors} />
          <section style={{ background: backgroundGradient, backgroundSize: '100% 100%' }}>
            MOCKUP PAGE 
          </section>
      </>
  )
}