import React from "react"
import { Tooltip } from 'react-tooltip';

function Links(props){
    return (
        <a href={props.link} target="_blank" className="link">
            <img data-tip={props.tooltip} className = "link-image" src={props.imgUrl}/>
           <Tooltip backgroundColor="#00000030"/>
        </a>
    )
}

export default Links
