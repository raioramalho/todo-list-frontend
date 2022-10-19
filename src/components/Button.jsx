import { useEffect, useState } from 'react'
import './style/Button.css'



function Button(props) {
    return (
        <div>
            <button id={ props.id } onClick={ props.callfunc }>
                { props.title }
            </button>
        </div>
        )
}



export default Button
