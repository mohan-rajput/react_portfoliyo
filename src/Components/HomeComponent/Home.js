import React, { useEffect, useRef } from 'react'
import './Home.css';
import pdf from '../../pdf/Resume.pdf';
import Contact from '../ContactComponent/Contact';
 import Typed from 'typed.js';

function Home() {
    const typedRef=useRef(null)
    useEffect(()=>{

        const options={
            strings:["Welcome to My Profile","My Name is Mohan Rajput","I am Full Stack Developer"],
            typeSpeed:50,
            backSpeed:50,
            loop:true,
        }
        const typed= new Typed(typedRef.current,options);
        return()=>{
            typed.destroy()
        };
    },[]);
    return (
        <>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-6 home1' data-aos="zoom-in-right" data-aos-duration="1000">
                        <h1 ref={typedRef}></h1>       
                        <a href={pdf} download="Resume.pdf" class="btn btn-outline-warning my-3" >Download Resume</a>
                    </div>
                    <div className='col-md-4 home2'  data-aos="zoom-in-left" data-aos-duration="1000">
                
                        <img src={`${process.env.PUBLIC_URL}/Assets/mohan.jpg`} alt='' />
                    </div>
            </div>
            </div>
        </>
    )
}

export default Home
