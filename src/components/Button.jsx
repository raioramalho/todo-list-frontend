import './Button.css'

function funClick(){
    console.log('click')
    document.querySelector("#taskContent > p").innerHTML = document.getElementById("inputTask").value
}

const Button = (

    <div>
        <button id="addButton" onClick={funClick}>
            Adicionar
        </button>
    </div>
  )


export default Button
