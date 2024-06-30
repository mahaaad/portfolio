import React from "react"
import styled from 'styled-components'
//import { Tooltip as ReactTooltip } from 'react-tooltip';


function Project(props){

const Project = styled.div`
    width: 60vw;
    height: 22.5vw;
    transition: all ease-in-out 0.15s;
    filter: drop-shadow(2px 10px 5px #00000015);
    &:hover{
    transform: translate(0,-10px);
    transition: all ease-in-out 0.25s;
    filter: drop-shadow(2px 10px 8px #00000025);
    cursor: pointer;
}
`
const Thumbnail = styled.img`
    width: 35vw;
    position: relative;
    z-index: 1;
    float: ${props.float == "left" ? "right" : "left"};
`
const Title = styled.h1` 
    font-size: 1.5vw;
    opacity: 80%;
    float: right;
    margin-right: 2vw;
    padding-top: 2.5vw;
`
const Tech = styled.h1`
    font-size: 0.75vw;
    opacity: 80%;
    float: ${props.float};
    margin-left: 0.75vw;
    margin-right: 0.75vw;

`
const Description = styled.p`
    text-align: justify;
    font-size: 0.85vw;
    position: relative;
    z-index: 2;
    width: 22.5vw;
    height: 6vw;
    float: right;
    color: white;
    font-weight: 300;
    padding-top: 1vw;
    padding-left: ${props.float == "left" ? '1vw' : '3vw'};
    padding-right: ${props.float == "right" ? '1vw' : '3vw'};
    background-color: rgba(0, 0, 0, .7);
    border-radius: 2px;
    filter: drop-shadow(2px 10px 5px #00000030);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
`
const Icon = styled.img` 
    opacity: 75%;
    width: 1vw;
    float: ${props.float};
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    transition: ease-in-out 0.2s;
    &:hover{
        transform: translate(0,-5px);
        transition: ease-in-out 0.2s;
        opacity: 100%;
    }
`
 return(
     <Project data-aos="fade-up" data-aos-once>
        <Thumbnail src={props.imgUrl} />
        <div style={{width: "25vw", height: "10vw", float: props.float}}>
            <Title>{props.projectName}</Title>
            <Description>{props.description}</Description>
            <div style={{width: "25vw", height: "1.75vw", float: props.float}}>
                <Tech>{props.tech4}</Tech>
                <Tech>{props.tech3}</Tech>
                <Tech>{props.tech2}</Tech>
                <Tech>{props.tech1}</Tech>
            </div>
            <div style={{marginTop: "1.5rem", width: "10vw", height: "1.5vw", float: props.float}}>
                <a>
                    <Icon  src="/images/icons/link.png" />
                    {/* <ReactTooltip /> */}
                </a>
                <a href={props.githublink} target="_blank">
                    <Icon src="/images/icons/github.png" />
                    {/* <Tooltip /> */}
                </a>
            </div>
        </div>
     </Project>
 )   
}

export default Project