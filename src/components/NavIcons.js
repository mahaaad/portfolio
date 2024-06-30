import React from "react"
import styled from 'styled-components'


function NavIcons(props){
    function scroll(){
        window.scrollTo(0,props.scroll)
    }
    const Icon = styled.img` 
        &:hover{
            opacity: 100%;
            transform: translate(0,-2.5px);
        }

    `

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        //console.log(scrolled)

            if (scrolled < [document.documentElement.clientWidth] * 0.455 || document.getElementById("mricon").mouseIsOver){
                document.getElementById("mricon").style.opacity = "100%";
            }
            else{
                document.getElementById("mricon").style.opacity = "60%";
            }
            if ( scrolled < [document.documentElement.clientWidth]  && scrolled >= [document.documentElement.clientWidth] * 0.455 || document.getElementById("abouticon").mouseIsOver){
                document.getElementById("abouticon").style.opacity = "100%";
            }
            else{
                document.getElementById("abouticon").style.opacity = "60%";
            }
            if ( scrolled < [document.documentElement.clientWidth] * 2.075 && scrolled >= [document.documentElement.clientWidth] || document.getElementById("projectsicon").mouseIsOver){
                document.getElementById("projectsicon").style.opacity = "100%";
            }
            else{
                document.getElementById("projectsicon").style.opacity = "60%";
            }
            if ( scrolled >= [document.documentElement.clientWidth] * 2.075 || document.getElementById("portfolioicon").mouseIsOver){
                document.getElementById("portfolioicon").style.opacity = "100%";
            }
            else{
                document.getElementById("portfolioicon").style.opacity = "60%";
            }

        }
    )
    return (
        <Icon id={props.id} src = {props.icon} onClick={scroll}/>
    )
}

export default NavIcons