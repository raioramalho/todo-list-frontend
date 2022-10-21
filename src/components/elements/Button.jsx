import { useEffect, useState } from "react"
import "../style/Button.css"

function Button(props) {
  return (
    <div>
      <button
        id={props.id}
        onClick={props.callfunc}
        name="_method"
        value={props.value}
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button
