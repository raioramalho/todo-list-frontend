import React, { useState, prevState, useEffect } from "react"
import myGear from "../gear/Brain"
import api from "../gear/Api"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import Bar from "../components/Bar"
import Card from "../components/Card"
import "./styles/App.css"

function App() {
  const texto = "TODO APP WITH REACT AND RAILS"
  const [items, setItems] = useState([])

  useEffect(async () => {
    const loadData = async () => {
      fetch(myGear.url)
        .then((response) => response.json())
        .then((json) => {
          //const upDate = json
          //console.log(json)
          setItems(json)
        })
    }
    loadData()
  }, [])

  if (items.length == 0) {
    localStorage.setItem("lastId", 0)
  } else {
    localStorage.setItem("lastId", 0 + items.at(-1)["id"] + 1)
  }

  function handleAddTask(newTask) {
    //console.log(newTask)
    setItems((prevState) => [...prevState, newTask])
    const sendTask = api.post(myGear.urlCreate, newTask)
  }

  function handleDoneTask(id) {
    const done = { task: { done: "true" } }
    setItems((prevState) => prevState)
    const doneTask = api.put(myGear.url + "/" + id, done)
  }

  function handleDelTask(itemId) {
    //console.log("FUNCTION: DEL", itemId)
    setItems((prevState) => prevState.filter((where) => where.id !== itemId))
    const sendTask = api.delete(myGear.url + "/" + String(itemId))
  }

  return (
    <div className="App">
      <React.StrictMode>
        <section>
          <h2>{texto}</h2>
          <Bar>
            <Input
              id="testFunc"
              type="text"
              placeholder="Digite sua próxima taréfa:"
            />
            <Button
              id="addButton"
              title="Adicionar"
              onClick={() => {
                const taskTitle = document.getElementById("testFunc").value
                const lastId = localStorage.lastId
                const newTask = {
                  task: {
                    id: String(lastId),
                    title: String(taskTitle),
                    done: false,
                  },
                }
                handleAddTask(newTask.task)
              }}
            />
          </Bar>
          {items.map((item) => (
            <Card id={item.id} key={item.id}>
              <p>{item.title}</p>
              <div id="control-box">
                <Button
                  id="doneTaskBtn"
                  title="v"
                  onClick={() => {
                    handleDoneTask(`${item.id}`)
                  }}
                />
                <Button
                  id="delTaskBtn"
                  title="x"
                  onClick={() => {
                    const itemId = item.id //sim o id tá certin
                    console.log("BUTTON: DEL", itemId)
                    handleDelTask(itemId)
                  }}
                />
              </div>
            </Card>
          ))}
        </section>
      </React.StrictMode>
    </div>
  )
}

export default App
