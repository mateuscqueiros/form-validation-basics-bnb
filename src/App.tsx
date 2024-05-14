import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Mateus');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({
          name,
        });
      }}
    >
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
