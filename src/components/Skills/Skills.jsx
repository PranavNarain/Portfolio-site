import React, { useState } from 'react';
import './Skills.css';
import {SKILLS} from "../../utils/data";
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

    const [selectedSkill,setSelectedSkil]=useState(SKILLS[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkil(data);
    };

  return (
    <section className="skills-container" id="skills">
        <h5>Technical Profeciency</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) =>(
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title===item.title}
                        onClick={() =>{
                            handleSelectedSkill(item);
                        }}
                    />
                ))}
            </div>

            <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills