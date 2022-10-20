import React, { Component } from "react";
import { useEffect, useState } from 'react';
import Bar from "../components/Bar";
import TaskList from "../components/TaskList";
import myGear from "../gear/Brain";
import './App.css';



function App() {
  return (
    <section>
      <div className="App">
        <Bar/>
        <TaskList/>
      </div>
    </section>
  )

}

export default App
