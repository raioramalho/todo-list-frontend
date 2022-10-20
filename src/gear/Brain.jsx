import api from "./Api"

const myGear = {
  funClick: function () {
    console.log("Click!")
  },
  funDigit: function () {
    console.log("Inputing..")
  },
  delTask: function (id) {
    console.log(`Deleting task: ${id}`)
  },
}

export default myGear
