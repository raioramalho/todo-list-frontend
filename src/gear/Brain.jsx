import api from "./Api"

const myGear = {
  funClick: function () {
    const title = document.getElementById("testFunc").value
    const newTask = { task: { title: title, done: false } }
    handleAddTask(newTask)
  },
  funDigit: function () {
    console.log("Inputing..")
  },
  delTask: function (id) {
    const taskId = { id }.id
    handleDelTask(taskId)
  },
  url: "http://localhost:3000/tasks",
  urlCreate: "http://localhost:3000/tasks/create/",
}


export default myGear
