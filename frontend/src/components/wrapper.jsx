import React from 'react'
import '../styles/wrapper.css';
import { Label } from './Typography';


export const WrapperWithTitle = (props) => {
    return (
        <div className='wrapper'>
                {props.children}
        </div>
    )
}

export const CheckboxWrapper = (props) => {
    return (
        <div className='checkbox-wrapper' style={props.style}>
            <Label text={props.wrapperName} />
            <div className="wrapper-child">
                {props.children}
            </div>
        </div>
    )
}