import React from "react";
import { useState } from 'react'
import Bar from "../components/Bar";
import Card from "../components/Card";
import './App.css'


function App() {

  return (
    <section>
      <div className="App">
        {Bar}
        <div id="content">
          {Card}
        </div>
      </div>
    </section>
  )

}

export default App
