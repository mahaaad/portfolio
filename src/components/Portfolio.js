import React from 'react'
import styled from 'styled-components'

const images = [

]

export default function Portfolio(props){
    const Portfolio = styled.div`
        position: relative;
        z-index: 1;
        border: 1px solid;
        border-color: #00000015;
        border-radius: 0.125vw;
        margin: 1vw;
        padding: 1vw;
        float: left;
        width: 25vw;
        height: ${props.height};
        padding-right: 2vw;
        background-color: #FFFFFF;
        filter: drop-shadow(0px 12px 10px #00000015);
        transition: all ease-in-out 0.15s;
        &:hover{
        transform: scale(1.025);
        transition: all ease-in-out 0.25s;
        filter: drop-shadow(2px 10px 5px #00000015);
    }
    `
    const Title = styled.h1`
        font-size: 1.5vw;
        opacity: 70%;
        line-height: 2rem!important;

    `
    const Description = styled.p`
        font-size: 1vw;
        opacity: 30%;
        text-align: justify;
    `

    const Container = styled.div`

    `

    return(
        <Portfolio>
            <img src={props.img} style={{width: props.imgWidth}}/>
            <Container>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Container>
        </Portfolio>
    )
}