import './MockUpPage.css';
import { useState } from 'react';
// import PaletteFetchForm from '../PaletteFetchForm/PaletteFetchForm';

export default function NewOrderPage({ colorList, setColorList }) {
    // const [colorList, setColorList] = useState([]);

    // style the background
    // const backgroundGradient = `radial-gradient(
    //     circle at 50% 100%, 
    //     rgb(${colorList[0]}) 19.9%, 
    //     rgb(${colorList[1]}) 35.9%, 
    //     rgb(${colorList[4]}) 24.5%
    // )`;


  return (
    <section className="mockup-background">
        <h1>MockUp Page</h1>
        <div className="curve">
        </div>
    </section>
  );
}