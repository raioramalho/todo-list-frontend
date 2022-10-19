import { useEffect, useState } from 'react'
import './style/Button.css'


function funClick(){
    console.log('click')
    console.log(document.getElementById("testFunc").value)
}


function Button(props) {
    return (
        <div>
            <button id={ props.id } onClick={funClick}>{ props.title }</button>
        </div>
        )
}



export default Button
