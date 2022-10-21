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
    console.log("Deleting task:", taskId)
  },
  url: "http://localhost:3000/tasks",
  urlCreate: "http://localhost:3000/tasks/create/",
}

async function handleAddTask(newTask) {
  console.log("AddTask!!", newTask)
  const sendTask = await api.post(myGear.urlCreate, newTask)
}

export default myGear
