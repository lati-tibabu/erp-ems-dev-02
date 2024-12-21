import '../styles/logo_style.css'

import ems_ai_logo from "../assets/ems_ai_logo.png"
import ems_ai_logo2 from "../assets/ems_ai_logo2.jpeg"
import ems_ai_logo3 from "../assets/ems_ai_logo3.jpeg"
import proper_logo1 from "/school-stream-logo2.png"
import proper_logo3 from "/school-stream-logo3.png"
import proper_logo4 from "/school-stream-logo4.png"
import proper_logo5 from "/school-stream-logo5.png"

export const AiLogo = (props) =>{
    return(
        <img src={ems_ai_logo} alt="" className={`ai_logo ${props.className}`} style={props.style} />
    )
}

export const AiLogo2 = (props) =>{
    return(
        <img src={ems_ai_logo2} alt="" className={`ai_logo ${props.className}`} style={props.style} />
    )
}

export const AiLogo3 = (props) =>{
    return(
        <img src={ems_ai_logo3} alt="" className={`ai_logo ${props.className}`} style={props.style} />
    )
}

export const ProperLogo1 = (props) =>{
    return(
        <img src={proper_logo1} alt="" className={`proper_logo ${props.className}`} style={props.style} />
    )
}

export const ProperLogo2 = (props) =>{
    return(
        <img src={proper_logo3} alt="" className={`proper_logo ${props.className}`} style={props.style} />
    )
}

export const ProperLogo4 = (props) =>{
    return(
        <img src={proper_logo4} alt="" className={`proper_logo ${props.className}`} style={props.style} />
    )
}
export const ProperLogo5 = (props) =>{
    return(
        <img src={proper_logo5} alt="" className={`proper_logo ${props.className}`} style={props.style} />
    )
}
