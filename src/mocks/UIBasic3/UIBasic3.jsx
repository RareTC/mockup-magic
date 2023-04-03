import './UIBasic3.css'

export default function UIBasic3({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
        <main className="UIBasic3-main" style={{background: c0}}>
            <div className="UIBasic3-nav" style={{background: c2}} >
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="UIBasic3-content">
                <div className="UIBasic3-card" style={{background: c2}}>
                    <img src="https://via.placeholder.com/300x200"/>
                    <div className="title" style={{color: c1}}>Card Item 1</div>
                    <p style={{ background: c0, color: c3}}>L lobortis purus id velit hendrerit, eget molestie justo consectetur.</p>
                </div>
                <div className="UIBasic3-card" style={{background: c4}}>
                    <img src="https://via.placeholder.com/300x200"/>
                    <div className="title" style={{color: c3}}>Card Item 2</div>
                    <p style={{ background: c3, color: c1}}>Nullam libero pellentesque, sit amet rhoncus velit suscipit. </p>
                </div>
                <div className="UIBasic3-card" style={{background: c2}}>
                    <img src="https://via.placeholder.com/300x200" />
                    <div className="title" style={{color: c1}}>Card Item 3</div>
                    <p style={{background: c0, color: c3}}>Aliquallis lorem vehicula. Nullam ut diam semper, luctus tellus vel, maximus odio.</p>
                </div>
            </div>
            <div className="UIBasic3-footer" style={{background: c2}}>
                <p>&copy; 2023 Site Name</p>
            </div>
        </main>
        </>
    )
}

