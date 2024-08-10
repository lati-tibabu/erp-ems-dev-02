import React from 'react'
import '../styles/input_style.css';
import { Label } from './Typography';

export const InputField = (props) => {
  return (
    <div className={"input_field"}>
        <label htmlFor={props.id} style={{display:'flex',flexDirection:'row', fontSize:'0.9rem', fontWeight:'normal', color:'red'}}><Label text={props.labelName}/> {props.required ?"*":""}</label>
        <input 
         className={"input"+" "+props.className}
         id= {props.id}
         type= {props.type} 
         name= {props.name}
         value= {props.value}
         placeholder= {props.placeholder}
         required= {props.required}
         disabled= {props.disabled}
         readOnly= {props.readOnly}
         maxLength= {props.maxLength}
         minLength= {props.minLength}
         min= {props.min}
         max= {props.max}
         step= {props.step}
         pattern= {props.pattern}
         autoFocus= {props.autoFocus}
         autoComplete= {props.autoComplete}
         multiple= {props.multiple}
         size= {props.size}
         onChange= {props.onChange}
         onBlur= {props.onBlur}
         onFocus= {props.onFocus} 
         style={props.style}
         />
    </div>
  );
}

export const RadioButton = (props) => {
  return (
    <div className="input_field">
        <label htmlFor={props.id}>{props.labelName}</label>
        <input type="radio" id={props.id} name={props.name} value={props.value} />
    </div>
  );
}

export const Checkbox = (props) => {
  return (
    <div className="input_field">
        <label htmlFor={props.id} className='checkbox-name'>
          <input type="checkbox" id={props.id} name={props.name} value={props.value} />
          {props.itemName}
        </label>
    </div>
  );
}   

export const TextArea = (props) => {
  return (
    <div className="input_field">
        <label htmlFor={props.id}>{props.labelName}</label>
        <textarea id={props.id} name={props.name} value={props.value} />
    </div>
  );    
}


export const DropDown = (props) => {
  return (
    <div className="input_field">
        <label htmlFor={props.id}>{props.labelName}</label>
        <select id={props.id} name={props.name} value={props.value}>
          {/* <option value="">{props.placeholder}</option> */}
          {props.children}
       </select>       
    </div>
    )}