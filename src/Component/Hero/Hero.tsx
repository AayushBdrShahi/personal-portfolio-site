import "./Hero.css";
import profile_img from "../../assets/logo.png";
import Resume from "../../assets/My CV.jpg"; // Make sure the path is correct

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="pic" src={profile_img} alt="" />
      <h1>
        <span>I'm Aayush Bahadur Shahi,</span>from NEPAL
      </h1>
      <p>I am currently studying for a Bachelor's degree and doing an internship.</p>

      <div className="hero-action">
        {/* Use anchor element with download attribute */}
        <a href={Resume} download="Aayush_Shahi_CV" className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
