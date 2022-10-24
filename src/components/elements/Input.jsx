import React from "react"
import "../style/Input.css"

function Input(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </input>
  )
}

export default Input
