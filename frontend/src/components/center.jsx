import React from 'react'
import '../styles/center_containers.css'
export const CenterColumn = (props) => {
  return (
    <div className='center_column' style={props.style}>{props.children}</div>
  )
}


export const CenterRow = (props) => {
  return (
    <div className='center_row'>{props.children}</div>
  )
}
