import { useEffect, useState } from "react"
import "../style/Button.css"

function Button(props) {
  return (
    <div>
      <button
        id={props.id}
        name="_method"
        value={props.value}
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button
