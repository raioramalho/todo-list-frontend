import React from "react"
import myGear from "../gear/Brain"
import Button from "./elements/Button"
import Input from "./elements/Input"
import "./style/Bar.css"

function Bar(props) {
  return (
    <div id="bar">
      <Input
        id="testFunc"
        type="text"
        placeholder="Digite sua próxima taréfa"
        callfunc={() => {
          myGear.funDigit()
        }}
      />

      <Button
        id="addButton"
        title="Adicionar"
        callfunc={() => {
          myGear.funClick()
        }}
      />
    </div>
  )
}

export default Bar
