import tasks from "../gear/Api"
import Card from "./Card"

function TaskList(props) {
  const myArray = tasks
  const newArray = []
  myArray.forEach((el) => {
    newArray.push(<Card id={el.id} taskId={el.id} taskTitle={el.title} />)
  })
  return <div id="content">{newArray}</div>
}

export default TaskList
