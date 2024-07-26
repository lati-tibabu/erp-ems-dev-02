import '../styles/logo_style.css'

import ems_ai_logo from "../assets/ems_ai_logo.png"
export const AiLogo = (props) =>{
    return(
        <img src={ems_ai_logo} alt="" className="ai_logo" style={props.style} />
    )
}