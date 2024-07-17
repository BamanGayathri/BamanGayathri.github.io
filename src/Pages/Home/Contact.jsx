import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons'



export default function socialMedia(props) {
  return (
    <>
    <section id="Contact" className="contact--section">
    <div className="social-media-div">
        <p>"Let's Connect!
          Feel free to reach out to discuss <b>potential collaborations</b> or <b>job opportunities</b>. I'm always open to networking and exploring new challenges."
          </p>
    </div>
    <div className="social-media-div"> 
          
          <SocialIcon url="https://www.linkedin.com/in/gayathri-baman-435713169/" />
          <span className="icon-button"></span>
          <SocialIcon url="https://github.com/BamanGayathri" />
          
    </div>
    </section>
    </>
  );
}