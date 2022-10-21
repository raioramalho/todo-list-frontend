import React from "react"
import "../style/Input.css"

function Input(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onInput={props.callfunc}
    />
  )
}

export default Input
