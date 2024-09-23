import React from "react";

import { LanguageSkillData } from "../../constant";
import { SkillComponent } from "../../component";
import "./skill.css"

const Skill = () =>(

    <div className="portfolio_skill-container flex__center box__container section__padding">
        <h1 className="headtext__inter">skill</h1>

        <div className="skill-component-container">
            {LanguageSkillData.map((skilldata) =>
            <SkillComponent
                languageImg={skilldata.LanguageImg}
            />
            )};
        </div>

        
    </div>
)

export default Skill