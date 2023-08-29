import "./newsletter.scss"

const NewsLetter = () => {
    return (
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get Email updates about our latest shop and <span>special offers.</span></p>
            </div>
            <form>
                <input type="text" placeholder="Your Email Address" />
                <button>Sign Up</button>
            </form>
        </section>
    )
}

export default NewsLetter
