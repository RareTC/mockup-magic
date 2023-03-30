import './UIBasic3.css'

export default function UIBasic3({ palette }) {
    
    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>
        <body className="UIBasic3-body" style={{background: c2}}>
            <div class="UIBasic3-nav">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <div class="UIBasic3-content">
                <div class="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 1" />
                    <div class="title">Food Item 1</div>
                    <p>L lobortis purus id velit hendrerit, eget molestie justo consectetur.</p>
                </div>
                <div class="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 2" />
                    <div class="title">Food Item 2</div>
                    <p>Nullam libero pellentesque, sit amet rhoncus velit suscipit. </p>
                </div>
                <div class="UIBasic3-card">
                    <img src="https://via.placeholder.com/350x250" alt="Food Item 3" />
                    <div class="title">Food Item 3</div>
                    <p>Aliquallis lorem vehicula. Nullam ut diam semper, luctus tellus vel, maximus odio.</p>
                </div>
            </div>

            <div class="UIBasic3-footer">
                <p>&copy; 2023 Restaurant Name</p>
            </div>
        </body>
        </>
    )
}

