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
         accept={props.accept}
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
        <input
            type="checkbox"
            id={props.id}                      // The unique identifier for the checkbox
            name={props.name}                  // The name attribute, often used to group checkboxes
            value={props.value}                // The value associated with the checkbox
            checked={props.checked}            // Controls the checked state of the checkbox (for controlled components)
            defaultChecked={props.defaultChecked} // Sets the initial checked state (for uncontrolled components)
            onChange={props.onChange}          // Event handler for when the checkbox state changes
            disabled={props.disabled}          // Disables the checkbox if true
            className={props.className}        // CSS class names for styling the checkbox
            style={props.style}                // Inline styles for the checkbox
            required={props.required}          // If true, the checkbox must be checked before submitting the form
            aria-label={props.ariaLabel}       // Accessibility label for screen readers
            aria-labelledby={props.ariaLabelledby} // ID of the element that labels the checkbox
            aria-describedby={props.ariaDescribedby} // ID of the element that provides additional description
            title={props.title}                // Tooltip text when hovering over the checkbox
            autoFocus={props.autoFocus}        // Automatically focuses the checkbox when the page loads
            form={props.form}                  // Associates the checkbox with a specific form
            tabIndex={props.tabIndex}          // Controls the tab order when navigating with the keyboard
            readOnly={props.readOnly}          // Makes the checkbox read-only, it can be checked but not edited
            onFocus={props.onFocus}            // Event handler for when the checkbox gains focus
            onBlur={props.onBlur}              // Event handler for when the checkbox loses focus
            onClick={props.onClick}            // Event handler for when the checkbox is clicked
            ref={props.innerRef}               // Reference to the input element, useful for accessing the DOM node directly
        />

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