import React, { Component } from "react";
import { useEffect, useState } from 'react';
import data from '../gear/Api'
import Bar from "../components/Bar";
import Card from "../components/Card";
import myGear from "../gear/Brain";
import './App.css';



function TaskList(props) {
  const myArray = data
  const newArray = []
  myArray.forEach((el)=>{
    newArray.push(
        <Card id={el.id} taskTitle={el.title}/>
    )
  })
  return (
    <div id="content">
      {newArray}
    </div>
  )
}

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
