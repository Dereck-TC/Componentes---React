import React from "react"
import { useState } from "react"
// import "./Card.css"

function Card2(){
    // Un componente siempre debe devolver una cosa(elemento de jsx)

    // Hooks: Función que modifica el estado o lifecycle de un componente
    // Hooks: Los hooks comienzan con useOtraCosa
    // Los hooks se definen en esta sección
    // useState(initialState) -> Devuelve un arreglo con dos posiciones -> [estadoActual,funcionActualizacion]
    // const estado = useState(0)
    // const estadoActual = estado[0]
    // const funcionActualizacion = estado[1]

    // Desestructuración -> Destructuring
    const [likes, setLikes] = useState(0)

    const giveLike = ()=>{
        setLikes(likes+1)
    }
    const disLike = ()=>{
        setLikes(likes-1)
    }

    return <> {/* Fragment */}
        <article className="card">
            {console.log(likes)}
            <p>Card</p>
            <p>{likes} likes</p>
            {/* Las llaves nos permiten escapar o procesar sentencias de JavaScript */}
            <button onClick={giveLike}>Like</button>
            <button onClick={disLike}>DisLike</button>
            {/* Reto: Implementar dislike y dos reacciones que les gusten */}
        </article>
    </>
    // return <React.Fragment> {/* Fragment */}
    //     <article>
    //         <p>Component</p>
    //     </article>
    //     <div>

    //     </div>
    // </React.Fragment>
}

export default Card2