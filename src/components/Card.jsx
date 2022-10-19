import './style/Card.css'
import Task from './Task'

const taskId = "1"

const Card = (
    <div>
        <div id={taskId} className='card'>
            {Task}
        </div>

        <hr></hr>

        <div id={taskId} className='card'>
            {Task}
        </div>
    </div>
)

export default Card
