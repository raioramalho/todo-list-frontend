import './style/Task.css'

function delTask() {
    console.log("Deleting task..")
}

const Task = (
    <div id="taskContent">
        <p>Fazer café</p>
        <button id="delTask" onClick={delTask}>x</button>
    </div>
)

export default Task
