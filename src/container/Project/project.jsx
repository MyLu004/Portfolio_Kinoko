import React from "react";

import "./project.css";
// import {projectData} from "../../constant/projectData";

import { ProjectComponent } from "../../component";
import { ProjectData } from "../../constant";

const Project = () =>(
    <div className="portfolio__project-container box__container section__padding flex__center" id="project">
        <h1 className="headtext__inter portfolio__project-headline ">PROJECT</h1>
        
        <div className="porfolio__project-component-container">
            {ProjectData.projectData.map((projectData)=>
            <ProjectComponent
                ProjectName={projectData.ProjectName}
                ProjectTool={projectData.ProjectTool}
                ProjectLanguage={projectData.ProjectLanguage}
                ProjectDescription={projectData.ProjectDescription}
            />
            
            )}
        </div>
        
        
        

    </div>
)

export default Project