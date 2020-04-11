import React,{useState, useEffect} from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepository] = useState([]);
  useEffect(()=>{
    api.get('repositories').then(response=>{
      setRepository(response.data)
    })
  },[])

  async function handleAddRepository() {
    setRepository([...repositories, `Novo projeto ${Date.now()}`]);

  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
  {repositories.map(repository =><li key={repository.id}>{repository.title}</li>)}
        <li>
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
