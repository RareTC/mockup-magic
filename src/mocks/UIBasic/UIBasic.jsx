import './UIBasic.css'
import logo from '../../assets/images/mmLogo.png';

export default function UIBasic({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
        <main className="UIBasic-main">
            <div className="UIBasic-container" style={{background: c0}}>
                <div className="UIBasic-header" style={{background: c2}}>
                    <nav>
                        <h1>Mockup</h1>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Login</h1>
                    </nav>
                </div>
                <div className="UIBasic-wrapper">
                    <div className="UIBasic-navigation">
                        <img id="UIBasic-logo" src={logo} alt="mock-logo" />
                    </div>
                    <div className="UIBasic-content" style={{background: c2}}>
                        <h1>Welcome to Mockup Magic!</h1>
                        <h2>Test your palette on a simple wireframe! </h2>
                        <p>MockupMagic, give you easy to generate palettes and see what 
                         they might look like on a website similar to yours.</p>
                        <button style={{background: c3, borderColor: c4}}>Learn More</button>
                    </div>
                </div>
                <div className="UIBasic-extra">
                    <div className="UIBasic-card" style={{background: c1}}>
                        <h3>View Layouts</h3>
                        <p>Click to view other layouts/components.</p>
                        <button style={{background: c3, borderColor: c4}} id="UIBasic-btn">Read More</button>
                    </div>
                    <div className="UIBasic-card" style={{background: c1}}>
                        <h3>Apply Favorite Palettes</h3>
                        <p>Send your favorite palettes to apply themselves to the mockup</p>
                        <button style={{background: c3, borderColor: c4}} id="UIBasic-btn">Read More</button>
                    </div>
                    <div className="UIBasic-card" style={{background: c1}}>
                        <h3>What is our purpose?</h3>
                        <p>Click to see the inspiration behind our.</p>
                        <button style={{background: c3, borderColor: c4}} id="UIBasic-btn">Read More</button>
                    </div>
                </div>
                <div className="UIBasic-footer" style={{background: c2}}>
                    <p>Copyright@2023</p>
                </div>
            </div>
        </main>
        </>
    );
}