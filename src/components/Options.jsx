import { useReducer } from 'react'
import { Button, Erro, Label, OpInput, Resultado, OptionsDiv } from "./OptStyled.jsx"

function reducer(state, action) {
    switch(action.type) {
        case 'collection': {
            return {
                ...state,
                collection: action.collection,
                erro: null
            }
        }

        case 'result': {
            return {
                ...state,
                result: action.result,
                erro: null
            }
        }

        case 'erro': {
            return {
                erro: action.erro,
                result: null
            }
        }
        default: state
    }
}

export default function Options ({id}) {
    
    const [state, dispatch] = useReducer(reducer, { collection: null, erro: null, result: null})

    const handleFetch = () => {
      (async () => { 
          
        if (!state.collection) {
           return dispatch({type: 'erro', erro: "Selecione uma coleção antes de pesquisar."})
        }
        
        const resp = await fetch(`https://dattebayo-api.onrender.com/${state.collection}/${id}`)

        if(!id) {
            return dispatch({type: 'erro', erro: "Insira um ID para pesquisa"})
        }

        if(!resp.ok) {
            return dispatch({type: 'erro', erro: "ERRO! ID inexistente para essa coleção!"})
        } 

        const data = await resp.json();
        dispatch({type: 'result', result: data})
      })();
    }

    return ( 
      <>
        <OptionsDiv className="checkbox-options" id="box">
          <Label>
            <OpInput type="radio" name="opt" id="character-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'characters' })}
            />Personagem
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="akatsuki-box" className="op"  onChange={() => dispatch({ type: 'collection', collection: 'akatsuki' })}
            />Akatsuki
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="villages-box" className="op"  onChange={() => dispatch({ type: 'collection', collection: 'villages' })} 
            />Vilas
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="clans-box" className="op"  onChange={() => dispatch({ type: 'collection', collection: 'clans' })}
            />Clãs
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="kekkei-genkai-box" className="op"  onChange={() => dispatch({ type: 'collection', collection: 'kekkei-genkai' })}
            />Kekkei-genkai
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="tailed-beasts-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'tailed-beasts' })}
            />Bestas de Cauda
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="teams-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'teams' })}
            />Equipes
            <br />
          </Label>

          <Label>
          <OpInput type="radio" name="opt" id="kara-box" classN="op" onChange={() => dispatch({ type: 'collection', collection: 'kara' })}
          />Kara
          <br />
          </Label>
        </OptionsDiv>
        
        <Button onClick={handleFetch}>Pesquisar</Button>

        {state.result ? 
             <Resultado>
             <h1>Nome: {state.result.name}</h1>
             <br />

             {state.result.jutsu && (
             <div className="jutsus">
                 <h2>Jutsus: </h2>
                 <ul style={{listStyleType: "none"}}>
                     {state.result.jutsu.map((jutsus, index) => (
                     <li key={index}>{jutsus}</li>
                     ))}
                 </ul>
             </div>
             )}

             {state.result.images && (
             <img src={state.result.images[0]} alt={state.result.name} style={{width: "30%"}}/>
             )}

             {state.result.characters && (
             <div className="personages-equipe">
                 <h3>Personagens:</h3>
                 {state.result.characters.map((per, index) => (
                 <p key={index}>{per}</p>
                 ))}
             </div>
             )}
       </Resultado>
        : <Erro>{state.erro}</Erro> }
      </>
    )
}