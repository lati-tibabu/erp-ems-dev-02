import React from 'react'
import '../styles/typography_styles.css';

export const Heading1 = (props)=> {
  return (
    <div style={props.style} className='heading1'>{props.text}</div>
  )
}

export const Heading2 = (props)=> {
  return (
    <div style={props.style} className='heading2'>{props.text}</div>
  )
}

export const Heading3 = (props)=> {
  return (
    <div style={props.style} className='heading3'>{props.text}</div>
  )
}

export const Heading4 = (props)=> {
  return (
    <div style={props.style} className='heading4'>{props.text}</div>
  )
}

export const Heading5 = (props)=> {
  return (
    <div style={props.style} className='heading5'>{props.text}</div>
  )
}   

export const Heading6 = (props)=> {
  return (
    <div style={props.style} className='heading6'>{props.text}</div>
  )
}

export const Paragraph = (props)=> {
  return (
    <div style={props.style} className='paragraph'>{props.text}</div>
  )
}

export const Label = (props)=> {  
  return (
    // <div style={props.style} required = {props.required} className='label'>{props.text} {props.required && '*'}</div>
    <div style={props.style} required = {props.required} className={`label ${props.className}`}>
      {props.text} <element style={{fontSize:'0.9rem', fontWeight:'normal', color:'red'}}>{props.required && '*'}</element></div>
  )
}
