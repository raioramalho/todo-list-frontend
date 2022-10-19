import React from 'react';
import './style/Input.css'


function testFunc(){
    console.log("Digitando..")
}


function Input(props) {
    return <input id={ props.id } type={ props.type } placeholder={ props.placeholder } onInput={testFunc}/>;
}


export default Input

