import AnshumanProfile from "../assets/Mahi.png"
import fancyBackground from "../assets/posterBG.png"
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-router-dom";
import { useEffect } from "react";
function HomeCompo() {
  useEffect(() => {
    document.querySelector(".homeSection").classList.add("sectionSlideIN");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  },[])
  return (
    <section className="app_Section homeSection">
      <div className="homeSection__LeftContainer">
        <h1 className="LeftContainer__secondaryHeading">Hello World</h1>

        <ReactTypingEffect
          text={["Frontend Developer.", "Full-Stack Developer.", "MERN Stack Developer.", "Backend Developer."]}
          cursorRenderer={cursor => <span className="LeftContainer__PostTypingCursor">{cursor}</span>}
          displayTextRenderer={(text) => {
            return (
              <span className="LeftContainer__postTyping">
                I&apos;m {text.split(',').map((char, index) => {
                  return (
                    <span
                      key={index}
                    >{char}</span>
                  );
                })}

              </span>
            );
          }}
        />

        <p className="LeftContainer__shortDescription">As a recent graduate with a passion for front-end development, I am highly skilled in crafting visually captivating and user-friendly web experiences using HTML, CSS, JavaScript, and React JS. Eager to leverage my strong foundation and adaptability, I am enthusiastic about contributing effectively to innovative projects and continuously expanding my skill set.</p>

        <div className="LeftContainer__buttonsContainer">
          <a href="../assets/Anshuman.Kumar.Resume.pdf" download="Anshuman.Kumar.Resume.pdf" target="_blank" className="commonlinkButton downloadResumeBtn">Get Resume</a>
          <Link to={"/portfolio"} className="commonlinkButton">Project</Link>
        </div>
      </div>

      <div className="homeSection__RightContainer">

        <div className="rightContainer_ProfileContainer">
          <img src={fancyBackground} alt="AnshumanProfile" className="profile_Background" />
          <img src={AnshumanProfile} alt="AnshumanProfile" className="profilePicture" />
        </div>


      </div>

    </section>
  )
}

export default HomeCompo
