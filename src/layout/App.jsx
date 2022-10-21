import React, { Component } from "react"
import Bar from "../components/Bar"
import TaskList from "../components/TaskList"
import "./App.css"

function App() {
  return (
    <section>
      <div className="App">
        <Bar />
        <TaskList />
      </div>
    </section>
  )
}

export default App
