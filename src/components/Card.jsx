import React from "react"
import "./style/Card.css"

function Card(props) {
  return (
    <div>
      <div id={props.id} className="card">
        {props.children}
      </div>
      <hr />
    </div>
  )
}

export default Card
