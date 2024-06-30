import React, { useEffect } from 'react'
import styled from 'styled-components'

function Bar(props){
    const GreyBar = styled.div` 
        width: 25vw;
        height: 0.75vw;
        background-color: #E9ECEF;
        margin-top: -0.5vw;
        margin-bottom: 0.25vw;
        border-radius: 4px;

    `
    const Skill = styled.div` 
        transition: width 3s ease-in-out;
        width: ${props.width};
        height: 0.75vw;
        background-color: #3FB66C;
        margin-top: -0.5vw;
        margin-bottom: 0.25vw;
        border-radius: 4px 0vw 0vw 4px;

    `
    return(
        <GreyBar>
            <Skill />
        </GreyBar>
    )
}

export default Bar