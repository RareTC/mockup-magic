import './UIBasic2.css'

export default function UIBasic2({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (

        <section style={{ backgroundGradient: `radial-gradient(circle at 50% 100%, ${c0} 19.9%, ${c1} 35.9%, ${c2} 24.5%)` , backgroundSize: '100% 100%' }}>
            <div className="UIBasic-Nav" style={{background: c3}}>
                SECOND MOCKUP
                <ul className="UIBasic-NavList" style={{background: c4, color: c2}}>
                    <li>Home</li>
                    <li>Account</li>
                    <li>About</li>
                    <li>View</li>
                </ul>
            </div>

        </section>);
}