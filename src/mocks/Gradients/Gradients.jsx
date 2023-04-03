import './Gradients.css'

export default function Gradients({ palette }) {

    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
        <main className="Gradient-container">
            <div className='BackgroundGradient' style={{background: `linear-gradient(to right, ${c0}, ${c1}, ${c2}, ${c3}, ${c4})`}}>
                <p>First 5 Colors Left to Right</p>
            </div>
            <div className='BackgroundGradient' style={{background: `linear-gradient(135deg, ${c0}, ${c1}, ${c2})`}}> 
                <p>First 3 colors at a 135 Degree Angle</p>
            </div>
            <div className='BackgroundGradient' style={{background: `linear-gradient(${c0}, ${c1})`}}>
                <p>Top to Bottom First 2 Colors</p>
            </div>
            <div className='BackgroundGradient' style={{background: `radial-gradient(${c0}, ${c1})`}}>
                <p>Radial Gradient from center, First 2 Colors</p>
            </div>
            <div className='BackgroundGradient' style={{backgroundImage: `repeating-linear-gradient(-45deg, ${c0}, ${c0} 25px, ${c1} 25px, ${c1} 50px)`}}>
                <p>Zebra Pattern First Two Colors</p>
            </div>
            <div className='BackgroundGradient' style={{background: `radial-gradient(circle at bottom right, ${c0} 0%, ${c1} 35%, ${c2} 70%)`}}>
                <p>Radial Gradient, bottom right first 3 colors</p>
            </div>
        </main>
        </>
    );
}