import { useState } from "react"
import Options from './Options'
import { Div } from "./IdInputStyled.jsx"


export default function IdInput () {

    const [id, setId] = useState(null)

    return (
        <>
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