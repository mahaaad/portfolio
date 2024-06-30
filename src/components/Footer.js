import React from "react"
import styled from 'styled-components'

function Footer(){
    const Icon = styled.img` 
        width: 0.75rem;
        float: left;
        margin: 0.35vw;
    `
    const Link = styled.div`
        display: flex;
        align-items: center;
        transition: ease-in-out 0.2s;
        opacity: 35%;
        &:hover{
            transform: scale(1.025);
            transition: ease-in-out 0.2s;
            cursor: pointer;
            opacity: 100%;
        }
    `

    const Small = styled.small`
        color: black;
        fontSize: 0.75vw;
        margin: 0.25vw;
    `

    return (
        <div style={{width: "100%", height: "3vw", width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Small style={{width: '100%', lineHeight: "0%", opacity: "75%", fontSize: "0.75rem", fontWeight: "lighter", marginTop: "5%", textAlign: "center"}}>Designed and developed by Mahad Rehan © Mahad Rehan 2024</Small>
            <div style={{display: 'flex'}}>
                <a href="https://github.com/mahaaad" target="_blank">
                <Link>
                    <Icon src="/images/icons/github.png" />
                    <Small style={{ float: "left"}}>GitHub</Small>
                </Link>
                </a>
                <a href="https://linkedin.com/in/mahadrehan/" target="_blank">
                <Link>
                    <Icon src="/images/icons/blacklinkedin.svg" />
                    <Small>LinkedIn</Small>
                </Link>
                </a>
            </div>
        </div>
    )
}

export default Footer