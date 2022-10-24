import React from "react"
import "../style/Label.css"

function Label(props) {
  return <label className={props.className}>{props.children}</label>
}

export default Label
