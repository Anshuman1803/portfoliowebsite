import AnshumanProfile from "../assets/Mahi.png"
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

        <p className="LeftContainer__shortDescription">As a recent graduate passionate about front-end development, I excel at creating attractive and user-friendly websites using HTML, CSS, JavaScript, and React JS. I'm eager to use my skills and adaptability to contribute to exciting projects and keep learning and growing along the way.</p>

        <div className="LeftContainer__buttonsContainer">
          <a href="https://drive.google.com/file/d/1wb2SBYUu-GLDLzGTcMsvGeYoHAZQqUCz/view?usp=sharing"   target="__blank" className="commonlinkButton downloadResumeBtn">Get Resume</a>

          <Link to={"/portfolio"} className="commonlinkButton">Project</Link>
        </div>
      </div>

      <div className="homeSection__RightContainer">

        <div className="rightContainer_ProfileContainer">
          <img src={AnshumanProfile} alt="AnshumanProfile" className="profilePicture" />
        </div>


      </div>

    </section>
  )
}

export default HomeCompo
