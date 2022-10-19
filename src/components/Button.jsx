import './style/Button.css'

function funClick(){
    console.log('click')
}

const Button = (

    <div>
        <button id="addButton" onClick={funClick}>
            Adicionar
        </button>
    </div>
  )


export default Button
