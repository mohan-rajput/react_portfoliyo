import React from 'react'
import './Experience.css';
import experience from '../Data/experience.json';
import Home from '../HomeComponent/Home';
import Footer from '../FooterComponent/Footer';
function Experience() {
  return (
    <>
    <br/><br/>
      <div className='container ex ' data-aos="zoom-in" data-aos-duration="1000" id="experience">
        <h1 id="c">EXPERIENCE</h1>
        
        {
          experience.map((item) => {
            return (
              <>
              
                <div key={item.id} className='ex-item text-center my-5'>
                  <div className='left'>
                    <img src={`/Assets/${item.imageSrc}`} alt='' id="compani-logo"></img>
                  </div>
                  <div className='right'>
                    <h2>{item.role}</h2>
                    <h4><span style={{ color: "yellow" }}>{item.startDate}{" "}{item.endDate}{" "}{item.location}</span></h4>
                    <h4 style={{ color: "yellow" }}>{item.experience}</h4>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>

    </>
  )
}

export default Experience
