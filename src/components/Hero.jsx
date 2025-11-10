import './Hero.css'

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero">
      <div className="heroContainer">
        <div className="heroContent">
          <div className="heroText">
            <h1 className="heroTitle">
              I'm <span className="heroName">Quinn Prisbrey</span>
            </h1>
            <h2 className="heroSubtitle">Full Stack Software Developer</h2>
            {/* <p className="heroDescription">
              I build modern software with a focus on user experience and
              clean code. Welcome to my portfolio.
            </p> */}
            <div className="heroButtons">
              {/* <button
                className="btn btnPrimary"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </button> */}
              <button
                className="btn btnSecondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="heroImage">
            <div className="heroImageWrapper">
              <img src="/profile-image.jpg" alt="Quinn Prisbrey" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

