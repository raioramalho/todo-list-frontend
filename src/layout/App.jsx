import React, { useState, prevState, useEffect } from "react"
import myGear from "../gear/Brain"
import api from "../gear/Api"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import Bar from "../components/Bar"
import Card from "../components/Card"
import "./styles/App.css"

function App() {
  const [texto, setTexto] = useState("TODO APP WITH REACT AND RAILS")
  const [items, setItems] = useState([])

  useEffect(async () => {
    fetch(myGear.url)
      .then((response) => response.json())
      .then((json) => {
        const upDate = json
        setItems(upDate)
      })
  }, [texto])

  function handleDelTask(id) {
    const delTask = api.delete(myGear.url + "/" + id)
    console.log("DELETING TASK: ", id)
  }

  return (
    <section>
      <div className="App">
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
              //const title = document.getElementById("testFunc").value
              const newTask = {
                task: {
                  title: document.getElementById("testFunc").value,
                  done: false,
                },
              }
              const sendTask = api.post(myGear.urlCreate, newTask)
              setItems((prevState) => [...prevState, newTask.task])
            }}
          />
        </Bar>
        {items.map((item) => (
          <Card id={item.id} key={item}>
            <p>{item.title}</p>
            <Button
              title="x"
              type="submit"
              onClick={() => {
                const itemId = `${item.id}`
                handleDelTask(itemId)
              }}
            />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default App
