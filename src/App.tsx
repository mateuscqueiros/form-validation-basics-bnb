import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Mateus');
  const [value, setValue] = useState(0);

  return (
    <form
      className="flex flex-col gap-5 w-[300px]"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({
          name,
          value,
        });
      }}
    >
      <label className="flex flex-col items-start">
        <span>Nome</span>
        <input
          type="text"
          name="name"
          defaultValue="Mateus"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex flex-col items-start">
        <span>Valor</span>
        <input
          type="number"
          name="value"
          defaultValue={0}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </label>
      <label className="flex flex-col items-start">
        <span>Marca</span>
        <select name="brand" onChange={(e) => setValue(Number(e.target.value))}>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
