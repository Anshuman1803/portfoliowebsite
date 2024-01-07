
import { useContext, useEffect } from 'react'
import { MyProjectContext } from '../context/ContextStore'
function ProjectCompo() {
  const { projectData } = useContext(MyProjectContext);
  useEffect(() => {
    document.querySelector(".ProjectSection").classList.add("sectionSlideIN");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <section className="app_Section ProjectSection">
      {
        projectData.map((project, index) => (
          <div className="projectSection_projectBox" key={project.projectID + 10}>

            <div className="projectBox_posterContainer">
              <img src={project.projectPoster} alt="PorjectPoster" className='projectbox__Poster' />
              <div className="projectBox_technologyUsedBox">
                {
                  project.projectTech.map((tech, index) => (
                    <span className='technologyUserBox__Techtext' key={index}>{tech}</span>
                  ))
                }
              </div>
            </div>
            <div className="projectBox_DescriptionContainer">
              <p className={`descriptionContainer_projectStatus ${project.projectStatus.split(" ").join("")}`}>{project.projectStatus}</p>
              <h1 className="descriptionContainer__projectTitle">{project.projectTitle} <a href={project.projectHostLink} rel="noreferrer" target='_blank' className='projectHostLink'><i className="fa-solid fa-up-right-from-square fa-beat"></i></a></h1>
              <p className="descriptionContainer__Desc">{project.projectDesc}</p>
              <ul className='descriptionContainer__descList'>
                {
                  project.projectDescList.map((desc, index) => (
                    <li key={index + 40} className='descriptionContainer__descListItem'>{desc}</li>
                  ))
                }
              </ul>
            </div>

          </div>
        ))
      }


    </section>
  )
}

export default ProjectCompo
