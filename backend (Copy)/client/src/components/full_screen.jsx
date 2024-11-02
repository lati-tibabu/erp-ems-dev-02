import React from 'react'
import '../styles/full_screen.css'

function FullScreen(props) {
  return (
    <div className='full_screen_container' style={props.screenStyle} >{props.children}</div>
  )
}

export default FullScreen;          