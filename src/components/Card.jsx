import React from 'react'
import Task from './Task'
import Button from './Button'
import './style/Card.css'

function Card(props){
    return(
        <div>
            <div className='card'>
                <Task taskTitle={props.taskTitle}/>
                <Button title="X"/>
            </div>
            <hr/>
        </div>
    )
}

export default Card
