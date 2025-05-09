import { useReducer } from 'react'
import { Button, Erro, Label, OpInput, Resultado, OptionsDiv, ListItem } from "../Options/OptStyled.jsx"

function reducer(state, action) {
  switch (action.type) {
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
      }
    }
    default: state
  }
}

export default function Options({ id }) {

  const [state, dispatch] = useReducer(reducer, { collection: null, erro: null, result: null })

  const handleFetch = () => {
    (async () => {
      if (!state.collection) {
        return dispatch({ type: 'erro', erro: "Selecione uma coleção antes de pesquisar." });
      }

      let url;

      if (id) {
        url = `https://dattebayo-api.onrender.com/${state.collection}/${id}`;
      } else {
        url = `https://dattebayo-api.onrender.com/${state.collection}`;
      }

      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          return dispatch({ type: 'erro', erro: "Erro ao buscar dados da API." });
        }

        const data = await resp.json();
        dispatch({ type: 'result', result: data });

      } catch (error) {
        console.error(`Erro ao buscar dados da API`, error.message);
        dispatch({ type: 'erro', erro: "Erro de conexão com a API." });
      }
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
          <OpInput type="radio" name="opt" id="akatsuki-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'akatsuki' })}
          />Akatsuki
          <br />
        </Label>

        <Label>
          <OpInput type="radio" name="opt" id="villages-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'villages' })}
          />Vilas
          <br />
        </Label>

        <Label>
          <OpInput type="radio" name="opt" id="clans-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'clans' })}
          />Clãs
          <br />
        </Label>

        <Label>
          <OpInput type="radio" name="opt" id="kekkei-genkai-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'kekkei-genkai' })}
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
          <OpInput type="radio" name="opt" id="kara-box" className="op" onChange={() => dispatch({ type: 'collection', collection: 'kara' })}
          />Kara
          <br />
        </Label>
      </OptionsDiv>

      <Button onClick={handleFetch}>Pesquisar</Button>

      {state.result ? (
        Array.isArray(state.result) ? (
          <Resultado>
            <h2>Lista:</h2>
            <ul style={{ listStyleType: "none" }}>
              {state.result.map((item, index) => (
                <li key={index}>
                  <h3>{item.name || "Sem nome"}</h3>
                  {item.images?.[0] && (
                    <img src={item.images[0]} alt={item.name || "Imagem"} style={{ width: "150px" }} />
                  )}
                  <hr />
                </li>
              ))}
            </ul>
          </Resultado>
        ) : (
          <Resultado>
            <h1>Nome: {state.result.name}</h1>

            {state.result.jutsu && (
              <div>
                <h2>Jutsus:</h2>
                <ul style={{ listStyleType: "none" }}>
                  {state.result.jutsu.map((j, i) => (
                    <li key={i}>{j}</li>
                  ))}
                </ul>
              </div>
            )}

            {state.result.images?.[0] && (
              <img src={state.result.images[0]} alt={state.result.name} style={{ width: "30%" }} />
            )}

          {state.result && typeof state.result === 'object' && (
            <Resultado>
              {Object.entries(state.result).map(([key, value]) => (
                Array.isArray(value) && !['jutsu', 'images'].includes(key) && (
                  <div key={key}>
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}:</h3>
                    <ul>
                      {value.map((item, index) => (
                        <ListItem key={index}>
                          {typeof item === 'object' ? item.name || JSON.stringify(item) : item}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                ) 
              ))}
            </Resultado>
          )}
          </Resultado>
        )
      ) : (
        <Erro>{state.erro}</Erro>
      )}

    </>
  )
}