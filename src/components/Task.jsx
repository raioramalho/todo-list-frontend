import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Task.css'

function Task(props) {
    return (
        <p>{props.taskTitle}</p>
    )
}

export default Task
