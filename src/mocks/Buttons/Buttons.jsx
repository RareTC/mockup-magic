import './Buttons.css'

export default function Buttons({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
            <main className="UIBasic-main">
                <button class="UIbutton" style={{background: c0, color: c2}}>Button 1</button>
                <button class="UIbutton" style={{background: c1, color: c4}}>Button 2</button>
                <button class="UIbutton" style={{background: c2, color: c0}}>Button 3</button>
                <button class="UIbutton" style={{background: c3, color: c2}}>Button 4</button>
                <button class="UIbutton" style={{background: c4, color: c2}}>Button 5</button>
            </main>
        </>
    );
}