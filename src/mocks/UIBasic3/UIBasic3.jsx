import './UIBasic3.css'

export default function UIBasic3({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
        <main className="UIBasic3-main" style={{background: c2}}>
            <div className="UIBasic3-nav">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <div className="UIBasic3-content">
                <div className="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 1" />
                    <div className="title">Card Item 1</div>
                    <p>L lobortis purus id velit hendrerit, eget molestie justo consectetur.</p>
                </div>
                <div className="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 2" />
                    <div className="title">Card Item 2</div>
                    <p>Nullam libero pellentesque, sit amet rhoncus velit suscipit. </p>
                </div>
                <div className="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 3" />
                    <div className="title">Card Item 3</div>
                    <p>Aliquallis lorem vehicula. Nullam ut diam semper, luctus tellus vel, maximus odio.</p>
                </div>
            </div>

            <div className="UIBasic3-footer">
                <p>&copy; 2023 Site Name</p>
            </div>
        </main>
        </>
    )
}

