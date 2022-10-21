import React from "react"
import myGear from "../gear/Brain"
import Button from "./elements/Button"
import "./style/Card.css"

function Card(props) {
  return (
    <div>
      <div className="card">
        <p>{props.taskTitle}</p>
        <Button
          title="X"
          callfunc={() => {
            myGear.delTask(`${props.taskId}`)
          }}
        />
      </div>
      <hr />
    </div>
  )
}

export default Card
