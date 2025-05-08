import { useState } from 'react'
import { Button, Erro, Label, OpInput, Resultado } from "./OptStyled.jsx"

export default function Options ({id}) {

    const [collection, setCollection] = useState(null)
    const [erro, setErro] = useState(null)
    const [result, setResult] = useState(null)
    
    
    const handleFetch = () => {
      (async () => { 
        
        if (!collection) {
          setErro("Selecione uma coleção antes de pesquisar.");
          setResult(null);
          return;
        }

        const resp = await fetch(`https://dattebayo-api.onrender.com/${collection}/${id}`)
        
        if(!resp.ok) {
          setErro("ERRO! ID inexistente para essa coleção!")
          setResult(null)
        } 

        const data = await resp.json();
        setResult(data)
        setErro(null)
      })();
    }

    return ( 
      <>
        <div className="checkbox-options" id="box">
          <Label>
            <OpInput type="radio" name="opt" id="character-box" className="op" onChange={() => setCollection('characters')}
            />Personagem
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="akatsuki-box" className="op"  onChange={() => setCollection('akatsuki')}
            />Akatsuki
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="villages-box" className="op"  onChange={() => setCollection('villages')} 
            />Vilas
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="clans-box" className="op"  onChange={() => setCollection('clans')}
            />Clãs
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="kekkei-genkai-box" className="op"  onChange={() => setCollection('kekkei-genkai')}
            />Kekkei-genkai
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="tailed-beasts-box" className="op" onChange={() => setCollection('tailed-beasts')}
            />Bestas de Cauda
            <br />
          </Label>

          <Label>
            <OpInput type="radio" name="opt" id="teams-box" className="op" onChange={() => setCollection('teams')}
            />Equipes
            <br />
          </Label>

          <Label>
          <OpInput type="radio" name="opt" id="kara-box" classN="op" onChange={() => setCollection('kara')}
          />Kara
          <br />
          </Label>
        </div>
        
        <Button onClick={handleFetch}>Pesquisar</Button>

        {erro && <Erro>{erro}</Erro>}

        {result && (
          <Resultado>
            <h1>Nome: {result.name}</h1>
            <br />

            {result.jutsu && (
              <div className="jutsus">
                <h2>Jutsus: </h2>
                  <ul style={{listStyleType: "none"}}>
                    {result.jutsu.map((jutsus, index) => (
                      <li key={index}>{jutsus}</li>
                    ))}
                  </ul>
              </div>
            )}

            {result.images && (
              <img src={result.images[0]} alt={result.name} style={{width: "30%"}}/>
            )}

            {result.characters && (
              <div className="personages-equipe">
                <h3>Personagens:</h3>
                {result.characters.map((per, index) => (
                  <p key={index}>{per}</p>
                ))}
              </div>
            )}
          </Resultado>
        )}
      </>
    )
}