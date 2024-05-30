import './Footer.css';
import React from 'react';
import './Footer.css'; // Optional: Include this line if you want to style your footer with an external CSS file.
const Footer = () => {
    return (
      <footer className=" text-white mt-6 p-4 text-center">
        <div className="Container">
          <div className="Row">
            <div className='Col-md-12'>
              <div>
                <p>&copy; {new Date().getFullYear()}   Mohan Rajput All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;