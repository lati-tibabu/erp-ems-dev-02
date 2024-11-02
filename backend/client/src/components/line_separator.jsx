import React from 'react'
import '../styles/line_style.css'

export const HorizontalLine = (props) => {
  return (
    <div className="horizontal_line" style={props.style}></div>
  )
}

export const VerticalLine = (props)=> {
  return (
    <div className="vertical_line" style={props.style}></div>
  )
}
