import React from 'react'
import './Project.css';
import project from '../Data/project.json';
function Project() {
    return (
        <>
        <br/><br/>
            <div className='container project my-3'>
                <h1 id="p">PROJECTS</h1>
                <br />
                <div className='row d-flex justify-content-center align-center-center '>
                    {
                        project.map((data) => (
                            <>
                                <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-4' data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <div className="card bg-black text-light my-4" style={{ width: "18rem", borderRadius: "10px", border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgb(100, 175, 10 , 0.5)" }}>
                                        <div className='img d-flex justify-content-center align-conter-center p-3'>
                                            <img src={`/Assets/${data.imageSrc}`} className="card-img-top" alt="..." style={{ width: "250px", height: "200px", border: "2px solid yellow", borderRadius: "10px" }} />
                                        </div>
                                        <div className="card-body text-center ">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description}</p>
                                            <a href={data.demo} className="btn btn-primary mx-3">DEMO</a>
                                            <a href={data.source} className="btn btn-warning">SOURCE</a>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Project;
