import "../style/Button.css"

function Button(props) {
  return (
    <div>
      <button
        id={props.id}
        name="_method"
        value={props.value}
        className={props.className}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button
