function Button(props) {
  return (
    <button id={props.id} className={props.css}>
        {props.text}
    </button>
  )
}

export default Button