
import MonogICON from "../assets/mongoICON.png"
import expressICON from "../assets/express-js-icon.png"
import HTMLICON from "../assets/HTMLICON.png"
import CSSicon from "../assets/CSSICON.png"
import jsICON from "../assets/jsICON.png"
import reactICON from "../assets/ReactICON.png"
import NodeICON from "../assets/NODEICON.png"
import sassICon from "../assets/SassICON.png"
import { useEffect } from "react"
function SkillCompo() {
  useEffect(()=>{
    document.querySelectorAll(".chartContainer_Card").forEach((item)=>{
      item.classList.add("animatedSkilsCard")
    });
  },[])
  return (
    <section className="app_Section skilsSection">
      <div className="skillSection_Animation">
        <ul className="skillSection__skilsList">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node js</li>
          <li>Mongo DB</li>
          <li>Vs Code</li>
          <li>Sass</li>
          <li>Tailwind</li>
          <li>Git</li>
          <li>Git Hub</li>
          <li>Responsive</li>
        </ul>
        <ul className="skillSection__skilsList skillSection__skilsListAlt">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node js</li>
          <li>Mongo DB</li>
          <li>Vs Code</li>
          <li>Sass</li>
          <li>Tailwind</li>
          <li>Git</li>
          <li>Git Hub</li>
          <li>Responsive</li>
        </ul>
      </div>

      <div className="skillSection__ChartContainer">

        <div className="chartContainer_Card">
          <img src={HTMLICON} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={CSSicon} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={jsICON} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={reactICON} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={NodeICON} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={sassICon} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={expressICON} alt="ICON" className="CardSkill_ICON" />
        </div>

        <div className="chartContainer_Card">
          <img src={MonogICON} alt="ICON" className="CardSkill_ICON" />
        </div>

      </div>
    </section>
  )
}

export default SkillCompo
