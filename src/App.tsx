import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css';
import { FormItem } from './components/FormItem';
import { Modal } from './components/Modal';
import { ProductFormType, productSchema } from './types';

function App() {
  return (
    <>
      <Modal />
    </>
  );
}

export default App;
