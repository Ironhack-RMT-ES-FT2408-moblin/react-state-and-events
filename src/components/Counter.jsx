import { useState } from "react"



function Counter() {
  
  // 1.

  // let contador = 0;
  let [ contador, setContador ] = useState(5)

  const [ valorRegistrado, setValorRegistrado ] = useState(null)
  
  // 3. 
  const handleIncrease = () => {
    // console.log("probando incrementar contador")
    // contador++
    // console.log(contador)

    // ! NUNCA DEBEMOS MODIFICAR DIRECTAMENTE EL ESTADO
    // if (contador >=10) {
    //   return
    // }

    setContador( contador + 1 ) // le pasamos cual queremos que sea el nuevo valor


    // las funciones de estados hacen dos cosas:
    //1. Modifican el valor del estado
    //2. Causan una nueva renderización del componente (con el nuevo valor del estado)

  }

  const handleDecrease = () => {
    setContador(contador - 1)
  }

  const handleRegistraValor = () => {
    setValorRegistrado(contador)
  }

  return (
    <div>
      
      <h3>Contador</h3>

      <h1>{contador}</h1>

      {/* 2. */}
      <button disabled={contador >= 10 ? true : false} onClick={ handleIncrease }>Sumar</button>
      <button onClick={handleDecrease}>Restar</button>

        <br />
        <br />
        <button onClick={ handleRegistraValor }>Registrar valor</button>
      <h4>El valor registrado es: {valorRegistrado}</h4>

    </div>
  )
}

export default Counter