import { useState } from "react"
import Options from './Options'

import './IdInput.css'

export default function IdInput () {

    const [id, setId] = useState(null)

    return (
        <>
            <div className="id-input">
                <input 
                    type="text" 
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    placeholder='Entre com o ID...'
                />
            </div>
            <Options id={id}/>
        </>
    )
}