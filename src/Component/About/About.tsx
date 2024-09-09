import './About.css'
// import profile_img from "../../assets/logo.png";

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="" alt="" />   image for the About me title */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                {/* <img src="" alt="" /> image for the About Me Section  */}
                
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi My Name is Aayush Bahadur Shahi. I am 20 years old. .</p>
                    <p> Currently i am doing mine Bachelors in Computer Science.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>

                </div>
            </div>
        </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>1+</h1>
            <p>Currently Doing Intern</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>3</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>1+</h1>
            <p>Happy Clients</p>
        </div>

      </div>
    </div>
  )
}

export default About
