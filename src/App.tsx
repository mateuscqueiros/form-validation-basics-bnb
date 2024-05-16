import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import './App.css';
import { Modal } from './components/Modal';
import { ProductForm } from './components/ProductForm';
import { ProductFormType } from './types';

function App() {
  const [open, setOpen] = useState(true);

  const onSubmit: SubmitHandler<ProductFormType> = (data) => console.log(data);

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Criar produto">
        <ProductForm onSubmit={onSubmit} />
      </Modal>
      <button onClick={() => setOpen(true)}>Open modal</button>
    </>
  );
}

export default App;
