import { useState } from 'react'
import './App.css'

function App() {

  const [collection, setCollection] = useState('')
  const [id, setId] = useState('')
  const [result, setResult] = useState(null)

  const handleFetch = async () => {
    try {
      let resp;
      if(!id) {
        resp = await fetch(`https://dattebayo-api.onrender.com/${collection}`)
      } else {
        resp = await fetch(`https://dattebayo-api.onrender.com/${collection}/${id}`)
      }
      const data = await resp.json();
      setResult(data)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
    
    <div className="id-input">ID: 
      <input 
        type="text" 
        onChange={(e) => setId(e.target.value)}
        value={id}
        placeholder='Entre com o id'
      />
    </div>

    <div className="checkbox-options">
      <input type="radio" name="opt" id="character-box" onChange={() => setCollection('characters')}
      />Personagem
      <br />
      <input type="radio" name="opt" id="akatsuki-box" onChange={() => setCollection('akatsuki')}
      />Akatsuki
      <br />
      <input type="radio" name="opt" id="villages-box" onChange={() => setCollection('villages')} 
      />Vilas
      <br />
      <input type="radio" name="opt" id="clans-box" onChange={() => setCollection('clans')}
      />Clãs
      <br />
      <input type="radio" name="opt" id="kekkei-genkai-box" onChange={() => setCollection('kekkei-genkai')}
      />Kekkei-genkai
      <br />
      <input type="radio" name="opt" id="tailed-beasts-box" onChange={() => setCollection('tailed-beasts')}
      />Bestas de Cauda
      <br />
      <input type="radio" name="opt" id="teams-box" onChange={() => setCollection('teams')}
      />Equipes
      <br />
      <input type="radio" name="opt" id="kara-box" onChange={() => setCollection('kara')}
      />Kara
      <br />
    </div>

    <button onClick={handleFetch}>Mostrar</button>

      {result && (
        <pre>{JSON.stringify(result, ["id", "name", "images", "jutsu"], 2)}</pre>
      )}
    </>
  )
}

export default App
