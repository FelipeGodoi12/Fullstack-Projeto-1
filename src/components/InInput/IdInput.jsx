import { useReducer } from "react"
import Options from '../Options/Options.jsx'
import { Div, Titulo } from "./IdInputStyled.jsx"

const initialArgs = {
    id: ''
}

function reducer(state, action) {
    switch(action.type) {
        case 'INPUT': {
            return {
                id: action.idInput
            }
        }
        default:
            return state;
    }
}

export default function IdInput () {

    const [state, dispatch] = useReducer(reducer, initialArgs);

    function handleInput (e) {
        dispatch({
            type: 'INPUT',
            idInput: e.target.value
        })
    }

    return (
        <>
        <Titulo>
            <h1>NARUTO API</h1>
            <h3>Selecione uma opção e clique em pesquisar para acessar todos os dados ou selecione um ID para pesquisa individual:</h3>
        </Titulo>
                    <Div>
                        <input 
                            type="text" 
                            value={state.id}
                            onChange={handleInput}
                            placeholder='Entre com o ID...'
                            />
                    </Div>
                <Options id={state.id}/>
        </>
    )
}