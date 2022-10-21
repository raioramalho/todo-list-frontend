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

async function handleAddTask(newTask) {
  //console.log("AddTask!!:", newTask)
  const sendTask = await api.post(myGear.urlCreate, newTask)
}

async function handleDelTask(taskId) {
  //console.log("DelTask!!:", taskId)
  const delTask = await api.delete(myGear.url + "/" + taskId)
}

export default myGear
