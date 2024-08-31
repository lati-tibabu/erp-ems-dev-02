import React from 'react'
import '../styles/buttons.css';

export const PrimaryButton = (props) => {
    return(
        <button className="primary"
            type={props.type}
            disabled={props.disabled}
            name={props.name}
            value={props.value}
            autoFocus={props.autoFocus}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            id={props.id}
            onClick={props.onClick}
            aria-label={props.ariaLabel}
            aria-hidden={props.ariaHidden}
            aria-expanded={props.ariaExpanded}
            style={props.style} 
        >
            {props.children}
        </button>
    );
}

export const SecondaryButton = (props) => {
    return(
        <button className={"secondary "+props.className}
            type={props.type}
            disabled={props.disabled}
            name={props.name}
            value={props.value}
            autoFocus={props.autoFocus}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            id={props.id}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            aria-label={props.ariaLabel}
            aria-hidden={props.ariaHidden}
            aria-expanded={props.ariaExpanded}
            style={props.style}
        >
            {props.children}
        </button>
    );
}

export const TertiaryButton = (props) => {
    return(
        <button className={"tertiary "+props.className}
            type={props.type}
            disabled={props.disabled}
            name={props.name}
            value={props.value}
            autoFocus={props.autoFocus}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            id={props.id}
            onClick={props.onClick}
            aria-label={props.ariaLabel}
            aria-hidden={props.ariaHidden}
            aria-expanded={props.ariaExpanded}
            style={props.style}
        >
            {props.children}
        </button>
    );
}

export const DisabledButton = (props) => {
    return(
        <button className="disabled">
            {props.children}
        </button>
    );
}

export const DangerButton = (props) => {
    return(
        <button className="danger"
            type={props.type}
            disabled={props.disabled}
            name={props.name}
            value={props.value}
            autoFocus={props.autoFocus}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            id={props.id}
            onClick={props.onClick}
            aria-label={props.ariaLabel}
            aria-hidden={props.ariaHidden}
            aria-expanded={props.ariaExpanded}
            style={props.style}
        >
            {props.children}
        </button>
    );
}

export const OKButton = (props) => {
    return(
        <button className="ok">
            {props.children}
        </button>
    );
}