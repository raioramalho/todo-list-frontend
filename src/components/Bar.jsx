import React from "react"
import myGear from "../gear/Brain"
import Button from "./elements/Button"
import Input from "./elements/Input"
import "./style/Bar.css"

function handleTest() {}

function Bar(props) {
  return (
    <div id="bar">
      <form onSubmit={handleTest()}>
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
          type="submit"
          callfunc={() => {
            myGear.funClick()
          }}
        />
      </form>
    </div>
  )
}

export default Bar
