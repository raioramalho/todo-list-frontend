import React, { useState, prevState, useEffect } from "react"
import myGear from "../gear/Brain"
import api from "../gear/Api"
import Input from "../components/elements/Input"
import Label from "../components/elements/Label"
import Button from "../components/elements/Button"
import Bar from "../components/Bar"
import Card from "../components/Card"
import "./styles/App.css"

function App() {
  const [texto, setTexto] = useState("TODO APP WITH REACT AND RAILS")
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
    localStorage.setItem("lastId", Number(0))
  } else {
    localStorage.setItem("lastId", Number(items.at(-1)["id"] + 1))
  }

  function handleAddTask(newTask) {
    //console.log(newTask)
    setItems((prevState) => [...prevState, newTask])
    const sendTask = api.post(myGear.urlCreate, newTask)
  }

  function handleDoneTask(itemId) {
    const done = { task: { done: "true" } }
    let selectItem = items
    selectItem[itemId].done = true
    setItems((prevState) => [...selectItem])
    const doneTask = api.put(myGear.url + "/" + itemId, done)
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
                    id: Number(lastId),
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
              <Label className={String(item.done)}>{item.title}</Label>
              <div id="control-box">
                <Button
                  id="doneTaskBtn"
                  title="v"
                  onClick={() => {
                    const itemId = item.id
                    handleDoneTask(itemId)
                  }}
                />
                <Button
                  id="delTaskBtn"
                  title="x"
                  onClick={() => {
                    const itemId = item.id //sim o id tá certin
                    //console.log("BUTTON: DEL", itemId)
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
