import { useState } from "react"
import Options from './Options'
import { Div, Titulo } from "./IdInputStyled.jsx"

export default function IdInput () {

    const [id, setId] = useState(null)

    return (
        <>
        <Titulo>
            <h1>NARUTO API</h1>
            <h3>Digite o ID e escolha uma das coleções abaixo:</h3>
        </Titulo>
            <Div className="id-input">
                <input 
                    type="text" 
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    placeholder='Entre com o ID...'
                />
            </Div>
            <Options id={id}/>
        </>
    )
}