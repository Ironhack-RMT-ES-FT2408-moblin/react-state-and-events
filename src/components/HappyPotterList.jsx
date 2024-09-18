
import { useState } from "react"
import allCharacters from "../data/characters.json"
// console.log(allCharacters)
// los archivos json son automaticamente exportados

function HappyPotterList() {

  const [ randomCharacter, setRandomCharacter ] = useState(null)
  const [ favList, setFavList ] = useState([])

  const handleRandomCharacter = () => {
    console.log("intentando seleccionar personaje aleatorio")

    const randomSelected = allCharacters[Math.floor( Math.random() * allCharacters.length )]

    setRandomCharacter(randomSelected)

  }

  const handleAddToFav = () => {
    console.log("añadiendo a favorito")

    console.log(randomCharacter)

    // favList.push(randomCharacter) //! nunca modificar directamente el estado

    const clone = favList.slice(0)
    clone.push(randomCharacter)

    setFavList(clone)
    setRandomCharacter(null)
  }

  const handleDelete = (indexABorrar) => {
    console.log("removiendo elemento", indexABorrar)

    const clone = favList.slice(0)
    clone.splice(indexABorrar, 1)

    setFavList(clone)

  }

  return (
    <div className='container'>
      
      <section>
        <h2>Personaje aleatorio</h2>
        <button onClick={handleRandomCharacter} style={{backgroundColor:"darkorange"}}>Seleccionar personaje</button>

        {randomCharacter !== null ? (
          <div className='character-card'>
            <h4>{randomCharacter.name}</h4>
            <p>{randomCharacter.description}</p>
            <button onClick={handleAddToFav} style={{backgroundColor:"darkgreen"}}>Agregar a Fav</button>
          </div>
          ) : (
            <h2>Clicka botón para ver</h2>
          )
        }

        {/* <div className='character-card'>
          <h4>{randomCharacter?.name}</h4>
          <p>{randomCharacter?.description}</p>
        </div> */}

      </section>

      <section>
        <h2>Favoritos</h2>

        {favList.map((eachFav, index) => {
          return (
            <div className='character-card'>
            <h4>{eachFav.name}</h4>
            <p>{eachFav.description}</p>
            <button onClick={() => handleDelete(index)} style={{backgroundColor:"darkred"}}>Borrar</button>
          </div>
          )
        })}

      </section>


    </div>
  )
}

export default HappyPotterList