import './App.css';
import Nav from './Components/NavComponent/Nav';
import Home from './Components/HomeComponent/Home';
import Experience from './Components/ExperienceComponent/Experience';
import Skill from './Components/SkillsComponent/Skill';
import Project from './Components/ProjectComponent/Project';
import Contact from './Components/ContactComponent/Contact';
import { Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './Components/FooterComponent/Footer';

function App() {
  useEffect(()=>{
Aos.init();
  })
  return (
    <>
    
    <Nav/>
    <div className='container '>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/skills" element={<Skill/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    {/* <Experience/>
    <Skill/>
    <Project/>
    <Contact/> */}
    </div>
    
    </>
  );
}

export default App;
