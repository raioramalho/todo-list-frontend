const myGear = {
  funClick: function () {
    console.log("Click!")
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
