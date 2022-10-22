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
          console.log(json)
          setItems(json)
        })
    }
    loadData()
  }, [])

  function handleDelTask(itemId) {
    //console.log("FUNCTION: DEL", itemId)
    const sendTask = api.delete(myGear.url + "/" + String(itemId))
    setItems((prevState) => prevState.filter((where) => where.id !== itemId))
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
                //const title = document.getElementById("testFunc").value
                const newTask = {
                  task: {
                    id: null,
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
            <Card id={item.id} key={item.id}>
              <p>{item.title}</p>
              <div id="control-box">
                <Button
                  id="doneTaskBtn"
                  title="v"
                  onClick={() => {
                    const done = { task: { done: "true" } }
                    const doneTask = api.put(
                      myGear.url + "/" + `${item.id}`,
                      done
                    )
                    setItems((prevState) => prevState)
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
