import React from "react";

import { Sample1 } from "../../constant/Imgage";

import "./projectComponent.css"

const ProjectComponent = ({ProjectName, ProjectTool, ProjectLanguage, ProjectDescription}) =>(
    <div className="projectComponent-container">
        <div className="projectComponent__Info-project">
            <div className="project-img-container">
                <img src={Sample1} alt="" />
            </div>

            <div className="infoProject p__robotoMono">
                <h2 className="headtext__robotoMono">{ProjectName}</h2>
                <h2 className="p__robotoMono"><span className="p_robo_bold">Tool</span> : {ProjectTool}</h2>
                <h2 className="p__robotoMono"><span className="p_robo_bold">Language</span>: {ProjectLanguage}</h2>
            </div>
        </div>

        <div className="projectComponent__description">
            <p className="p__robotoMono">{ProjectDescription}</p>
        </div>
    </div>
)


export default ProjectComponent