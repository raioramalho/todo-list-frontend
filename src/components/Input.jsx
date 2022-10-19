import './Input.css'

function funcInput(){
    console.log("Digitando..")
}

const Input = (
    <div>
        <input id="inputTask" onInput={funcInput} type="text" placeholder="Digite sua próxima taréfa"/>
    </div>
)


export default Input

