import { useContext, useEffect } from "react";
import { MyProjectContext } from "../context/ContextStore";
function ProjectCompo() {
  const { projectData } = useContext(MyProjectContext);
  useEffect(() => {
    document.querySelector(".ProjectSection").classList.add("sectionSlideIN");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="app_Section ProjectSection">

      {projectData.map((project, index) => {
        return (
          <div className="projectSection_projectBox" key={project.projectTitle + index}>
            <p className={`projectBox__status ${project.projectStatus}`}>{project.projectStatus[0]}</p>
            <h1 className="projectBox__projectTitle">
              {project.projectTitle}
              <a
                href={project.projectHostLink}
                rel="noreferrer"
                target="_blank"
                className="projectHostLink"
              >
                <i className="fa-solid fa-up-right-from-square fa-beat"></i>
              </a>
            </h1>

            <div className="ProjectBox__posterContainer">
              <img
                src={project.projectPoster}
                alt="project_Poster"
                className="projectBox__poster"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ProjectCompo;
