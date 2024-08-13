import React from 'react';
import './SliderStyle.css'
import LinkedinProfileCard from '../assets/LinkedinProfileCard.png';
import ProjectsProfileCard from '../assets/ProjectsProfileCard.png';
import githubProfileCard from '../assets/githubProfileCard.png';
import SkillsProfileCard from '../assets/SkillsProfileCard.png';


function Slider() {
  return (
    <>
      <div className="banner">
        <div className="slider" style={{ '--quantity': 4 }}>
          <div className="item" style={{ '--position': 1 }}>
            <a href="https://www.linkedin.com/in/aryan-saini-124aa6195/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinProfileCard} alt="LinkedinProfileCard" />
            </a>
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <a href="https://github.com/AryanSaini57" target="_blank" rel="noopener noreferrer">
              <img src={ProjectsProfileCard} alt="ProjectsProfileCard" />
            </a>
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <a href="https://github.com/AryanSaini57" target="_blank" rel="noopener noreferrer">
              <img src={githubProfileCard} alt="githubProfileCard" />
            </a>
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <a href="https://github.com/AryanSaini57" target="_blank" rel="noopener noreferrer">
              <img src={SkillsProfileCard} alt="SkillsProfileCard" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
