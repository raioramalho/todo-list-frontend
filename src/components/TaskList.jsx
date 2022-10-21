import React from "react"
import api from "../gear/Api"
import myGear from "../gear/Brain"
import Card from "./Card"

const tasks = await api.get(myGear.url)

function TaskList(props) {
  const myArray = tasks
  const newArray = []
  myArray.forEach((el) => {
    newArray.push(<Card id={el.id} taskId={el.id} taskTitle={el.title} />)
  })
  return <div id="content">{newArray}</div>
}

export default TaskList
