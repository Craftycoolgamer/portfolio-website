import './Hero.css'

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero">
      <div className="heroContainer">
        <div className="heroContent">
          <h1 className="heroTitle">
            Hi, I'm <span className="heroName">Quinn Prisbrey</span>
          </h1>
          <h2 className="heroSubtitle">Full Stack Developer</h2>
          <p className="heroDescription">
            I build modern web applications with a focus on user experience and
            clean code. Welcome to my portfolio.
          </p>
          <div className="heroButtons">
            <button
              className="btn btnPrimary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
            <button
              className="btn btnSecondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

