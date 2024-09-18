
function Events() {

  const pasarCursorSobreTitulo = () => {
    console.log("pasando el cursor")
  }

  const quitandoCursorDelTitulo = () => {
    console.log("quitando el cursor")
  }

  const handleDelete = () => {
    console.log("clickando el boton para borrar algo")
  }

  const handleInputChange = (event) => {
    // console.log(event)
    console.log(event.target.value)
    // console.log("cambiando el campo")
  }

  return (
    <div>
      
      <h1 onMouseEnter={ pasarCursorSobreTitulo } onMouseLeave={quitandoCursorDelTitulo}>Events</h1>

      <button onClick={ handleDelete }>Borrar Pantalla</button>

      <br />

      <textarea type="text" onChange={ handleInputChange } onFocus={() => console.log("enfocando en el input")}/>

    </div>
  )
}

export default Events



// botonNode.addEventListener("click", () => {
//   console.log("algo")
// })