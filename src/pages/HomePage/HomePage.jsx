import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ user, setShowAuth, isAuth }) {
    return (
        <>
        <div className="HomePage-container">
                <h1>Welcome to Mockup Magic{ user ? `, ${user.name}!` : '!'}</h1>
                <div className='HomePage-palettecontainer'>
                    <h4>
                        Click 
                        <button>
                            <Link id= "HomePage-link" to="/mockup">Mockups</Link> 
                        </button>
                        to see random palettes applied to a demo wireframe. <br />
                        For best results try locking in the main (middle) color and generating the rest of the palette.
                    </h4>
                    <div className='HomePage-palette-demo'>
                        <div className='HomePage-explained'>
                            <div className='HomePage-color1'></div>
                            <p>Lighter Shade : Background for dark on light. </p>
                        </div>
                        <div className='HomePage-explained'>
                            <div className='HomePage-color2'></div>
                            <p>Light Accent : Accent to draw attention. </p>
                        </div>
                        <div className='HomePage-explained'>
                            <div className='HomePage-color3'></div>
                            <p>Main Color : Use liberally as your main color.</p>
                        </div>
                        <div className='HomePage-explained'>
                            <div className='HomePage-color4'>
                            </div>
                            <p>Darker Accent : Another accent in your arsenal. </p></div>
                        <div className='HomePage-explained'>
                            <div className='HomePage-color5'></div>
                            <p>Darker Shade: Use as background for light on dark.</p>
                        </div>
                    </div>
                    { isAuth && 
                        <button id='HomePage-login' onClick={() => setShowAuth(true)}>
                            Login
                        </button>
                    }
                </div>
            </div>
        </>
    );
}