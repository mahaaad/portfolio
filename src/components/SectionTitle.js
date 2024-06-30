import React from "react"

function SectionTitle(props){
    return(
        <div className= "sectiontitle">
            <hr style={{marginLeft: "3vw"}} />
            <h2 style={{fontSize: "2vw"}}>{props.title}</h2>
            <img style={{width: "1vw"}} src = {props.icon}/>
            <hr style={{marginRight: "3vw"}}/>
        </div>
    )
}

export default SectionTitle