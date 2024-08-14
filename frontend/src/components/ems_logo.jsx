import '../styles/logo_style.css'

import ems_ai_logo from "../assets/ems_ai_logo.png"
import ems_ai_logo2 from "../assets/ems_ai_logo2.jpeg"
import ems_ai_logo3 from "../assets/ems_ai_logo3.jpeg"
export const AiLogo = (props) =>{
    return(
        <img src={ems_ai_logo} alt="" className="ai_logo" style={props.style} />
    )
}

export const AiLogo2 = (props) =>{
    return(
        <img src={ems_ai_logo2} alt="" className="ai_logo" style={props.style} />
    )
}

export const AiLogo3 = (props) =>{
    return(
        <img src={ems_ai_logo3} alt="" className="ai_logo" style={props.style} />
    )
}