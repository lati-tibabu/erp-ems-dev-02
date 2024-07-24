import React from 'react'
import '../styles/row_styles.css';

function RowWrapper(props) {
  return (
    <div className='row_wrapper' style={props.style}>{props.children}</div>)
}

export default RowWrapper;