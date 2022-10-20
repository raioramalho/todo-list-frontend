import React from 'react'
import myGear from '../gear/Brain'
import Task from './Task'
import Button from './Button'
import './style/Card.css'

function Card(props){
    return(
        <div>
            <div id={ props.id } className='card'>
                <Task taskTitle={props.taskTitle}/>
                <Button title="X" callfunc={() => {
                myGear.delTask(`${ props.taskId }`)
            }}/>
            </div>
            <hr/>
        </div>
    )
}

export default Card
