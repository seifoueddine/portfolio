import React from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project,i) => {
              return (
                <div className="saaya-health-div" key={i} onClick={() => openProjectInNewWindow(project.link)}>
                  {/* <img alt="Seif eddine Working" src={project.image}></img> */}
                  <img
             
                className="education-roundedimg"
                src={project.image}
                alt="Seif eddine messions"
                 />
                </div>
              );
            })}
          </div>
          {/* <div className="starup-project-image"></div> */}
        </div>

        {/* <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects2.projects.map((project,i) => {
              return (
                <div className="saaya-health-div" key={i} onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="Seif eddine Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
     
        </div> */}


      </div>
    </div>
    </Fade>
  );
}
