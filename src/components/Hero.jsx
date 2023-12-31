
export default function Hero(){

    return (
        <section className="hero" id="hero">
            <div className="hero--container hero--text">
                <h1>Drew Beland</h1>
                <h2>Physical Therapist. Software Engineer.</h2>
                <a href="#contact" className="cta hero--cta">
                    <span>Contact Me</span>
                </a>
            </div>

            <div className="hero--container grow-2 hero--image">
                <img src="/headerimage.svg" alt="" />
            </div>
            <div>
            </div>
        </section>
    )
}