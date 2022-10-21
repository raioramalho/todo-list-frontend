import React from "react"
import myGear from "../gear/Brain"
import Button from "./elements/Button"
import "./style/Card.css"

function handleDelTask() {}

function Card(props) {
  return (
    <div>
      <div className="card">
        <p>{props.taskTitle}</p>
        <form onSubmit={handleDelTask()}>
          <Button
            title="x"
            type="submit"
            callfunc={() => {
              myGear.delTask(`${props.taskId}`)
            }}
          />
        </form>
      </div>
      <hr />
    </div>
  )
}

export default Card
