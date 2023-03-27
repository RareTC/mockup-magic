import './MockUpPage.css';
import { useState } from 'react';
import PaletteFetchForm from '../../components/PaletteFetchForm/PaletteFetchForm';

export default function MockUpPage() {
    const [backgroundGradient, setBackgroundGradient] = useState('');



    // style the background
    function handleFetchColors(colorList) {
      const backgroundGradient = `radial-gradient(
          circle at 50% 100%, 
          rgb(${colorList[0]}) 19.9%, 
          rgb(${colorList[1]}) 35.9%, 
          rgb(${colorList[4]}) 24.5%
      )`;
      setBackgroundGradient(backgroundGradient);

    }


    return (
      <>
        MOCKUP PAGE 
          <PaletteFetchForm handleFetchColors={handleFetchColors} />
          <section style={{ background: backgroundGradient, backgroundSize: '100% 100%' }}>
          </section>
      </>
  )
}