import React from 'react'
import './Skill.css';
import skills from '../Data/skills.json';
import Home from '../HomeComponent/Home';
function Skill() {
  return (
    <>
      <br /><br />
      <div className='container skill' >
        <h1 id="s">SKILLS</h1>
        <div className='items' >
          {
            skills.map((data) => (
              <>
                <div className='item' key={data.id} data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                  <img src={`/Assets${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  )
}

export default Skill
