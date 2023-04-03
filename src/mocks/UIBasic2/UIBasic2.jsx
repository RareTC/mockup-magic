import './UIBasic2.css'

export default function UIBasic2({ palette }) {

    const [c0, c1, c2, c3, c4] = palette.colors

    return (
        <>

            <div className="UIBasic2-container" style={{background: c0}}>
                <nav className="UIBasic2-navbar" style={{background: c4}}>
                    <ul className='UIBasic2-Navlist'>
                        <li style={{background: c2}}><a href="#">Home</a></li>
                        <li style={{background: c2}}><a href="#">About</a></li>
                        <li style={{background: c2}}><a href="#">Blog</a></li>
                        <li style={{background: c2}}><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <main className="UIBasic2-main">
                    <div className="UIBasic2-title" style={{background: c3, borderColor: c0}}
                    >Mockup's Blog</div>
                    <article>
                        <div className='blog-container' style={{background: c3}}>
                            <h1 style={{color: c1, background: c4}}>What is the story behind Mockup Magic?</h1>
                            <p>I am glad you asked! The problem began with never knowing what I wanted a website to look like or being unable
                            to envision what a color palette may look like when actually rendered on to a page. Sometimes it is not even close to what I imagined!
                            Enter: Mockup Magic, a solution to envision your wireframe, in a rough draft of course. </p>
                            <p>Add a Comment</p>
                        </div>
                        <div className='blog-container' style={{background: c3}}>
                            <h1 style={{color: c1, background: c4}}>What is the story behind Mockup Magic?</h1>
                            <p>I am glad you asked! The problem began with never knowing what I wanted a website to look like or being unable
                            to envision what a color palette may look like when actually rendered on to a page. Sometimes it is not even close to what I imagined!
                            Enter: Mockup Magic, a solution to envision your wireframe, in a rough draft of course. </p>
                            <p>Add a Comment</p>
                        </div>
                    </article>
                </main>
            </div>

        </>

    );
}