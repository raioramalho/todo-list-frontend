function TaskList(props) {
  //const myArray = tasks
  const [myArray, setMyArray] = useState(tasks)
  const newArray = []

  myArray.forEach((el) => {
    newArray.push(
      <Card>
        <p>{el.title}</p>
        <Button title="x" />
      </Card>
    )
  })
  return <div id="content">{newArray}</div>
}
