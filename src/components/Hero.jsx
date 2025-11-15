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
            <div className="heroButtons">
              <button
                className="btn btnSecondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="heroImage">
            <img src="./images/pfp greyscale.png" alt="Quinn Prisbrey" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

