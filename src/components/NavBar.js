import React from 'react'
import Links from "./Links";

export default function NavBar(props){
    return(
        <div className="nav-bar">
            <div className="logo">
                <img src = "/images/icons/mrlogo.svg" />
            </div>
            <Links
                tooltip="View Github"
                link="https://github.com/mahaaad"
                imgUrl="/images/icons/blackgithub.svg"
            />
            <Links
                tooltip="View Dribbble"
                link="https://dribbble.com/mahadR"
                imgUrl="/images/icons/blackdribbble.svg"
            />
            <Links
                tooltip="View LinkedIn"
                link="https://www.linkedin.com/in/mahadrehan/"
                imgUrl="/images/icons/blacklinkedin.svg"
            />            
            <Links
                tooltip="Email"
                link="mailto:mahad.rehan@gmail.com"
                imgUrl="/images/icons/blackmail.svg"
            />
            <Links
                tooltip="View Resume"
                link="/files/Mahad Rehan Resume.pdf"
                imgUrl="/images/icons/blackresume.svg"
            />

        </div>
    )
}