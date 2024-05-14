import { useState } from 'react';
import './App.css';
import { FormItem } from './components/FormItem';

function App() {
  const [name, setName] = useState('Mateus');
  const [value, setValue] = useState(0);
  const [brand, setBrand] = useState('samsung');
  const [rating, setRating] = useState(1);

  return (
    <form
      className="flex flex-col gap-5 w-[300px]"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({
          name,
          value,
          brand,
          rating,
        });
      }}
    >
      <FormItem label="Nome">
        <input
          type="text"
          name="name"
          defaultValue="Mateus"
          onChange={(e) => setName(e.target.value)}
        />
      </FormItem>
      <FormItem label="Valor">
        <input
          type="number"
          name="value"
          defaultValue={0}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </FormItem>
      <FormItem label="Marca">
        <select name="brand" onChange={(e) => setBrand(e.target.value)}>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
      </FormItem>
      <FormItem label="Avaliação">
        <input
          type="range"
          name="rating"
          defaultValue={1}
          min={1}
          max={5}
          step="0.5"
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </FormItem>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
