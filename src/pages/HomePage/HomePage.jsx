import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ user, setShowAuth, isAuth }) {
    return (
        <>
            <div className="HomePage-container">
                {user ? (
                    <>
                        <h1>Welcome to Mockup Magic, {user.name}!</h1>
                        <div className='HomePage-palettecontainer'>
                            <h4>
                                Click
                                <button>
                                    <Link id="HomePage-link" to="/mockup">Mockups</Link>
                                </button>
                                to see random palettes applied to a demo wireframe. <br />
                                For best results try locking in the main (middle) color and generating the rest of the palette.
                            </h4>
                            <h5>Example Below: </h5>
                        </div>
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
                                <p>Darker Accent : Another accent in your arsenal. </p>
                            </div>
                            <div className='HomePage-explained'>
                                <div className='HomePage-color5'></div>
                                <p>Darker Shade: Use as background for light on dark.</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Welcome to Mockup Magic!</h1>
                        <h4>
                            {isAuth &&
                                <button id='HomePage-login' onClick={() => setShowAuth(true)}>
                                    Get Started
                                </button>
                                
                            } to see random palettes applied to demo wireframes. <br />
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
                                <p>Darker Accent : Another accent in your arsenal. </p>
                            </div>
                            <div className='HomePage-explained'>
                                <div className='HomePage-color5'></div>
                                <p>Darker Shade: Use as background for light on dark.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}