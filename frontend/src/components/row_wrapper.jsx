import React from 'react'
import '../styles/row_styles.css';

function RowWrapper(props) {
  return (
    <div className='row_wrapper' style={props.style} onClick={props.onClick} width={props.width}>{props.children}</div>)
}

export default RowWrapper;