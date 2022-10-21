const myGear = {
  funClick: function () {
    const title = document.getElementById("testFunc").value
    const newTask = { task: { title: "Testando api", done: "true" } }
    console.log("AddTask!!", newTask)
  },
  funDigit: function () {
    console.log("Inputing..")
  },
  delTask: function (id) {
    const taskId = { id }.id
    console.log("Deleting task:", taskId)
  },
}

export default myGear
