import React from 'react'
import '../styles/column_styles.css';
function ColumnWrapper(props) {
  return (
    <div className={"column_wrapper"+" "+props.className} style={props.style} onClick={props.onClick} >{props.children}</div>
  )
}

export default ColumnWrapper;