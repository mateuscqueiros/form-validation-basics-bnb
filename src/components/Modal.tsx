import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductFormType, productSchema } from '../types';
import { FormItem } from './FormItem';

export function Modal() {
  const [open, setOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<ProductFormType> = (data) => console.log(data);
  return (
    <div
      id="modal"
      className={
        'absolute top-0 left-0 w-screen h-screen z-10 ' + (open ? '' : 'hidden')
      }
    >
      <div className="relative flex justify-center items-center h-full w-full">
        <div
          id="backdrop"
          className="absolute top-0 left-0 w-full h-full bg-slate-500 opacity-20 z-0"
        ></div>
        <div className="p-8 bg-teal-900 rounded-lg z-20">
          <div className="relative">
            <span
              onClick={() => setOpen(false)}
              className="absolute top-0 right-0 cursor-pointer"
            >
              Close
            </span>
            <h2>Criar produto</h2>
          </div>
          <form
            className="flex flex-col gap-5 w-[300px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormItem label="Nome" error={errors.name}>
              <input
                type="text"
                defaultValue="Mateus"
                {...register('name', { required: 'Este campo é obrigatório' })}
              />
            </FormItem>
            <FormItem label="Valor" error={errors.value}>
              <input
                type="number"
                defaultValue={0}
                {...register('value', { valueAsNumber: true })}
              />
            </FormItem>
            <FormItem label="Marca" error={errors.brand}>
              <select {...register('brand')} defaultValue="apple">
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="xiaomi">Xiaomi</option>
              </select>
            </FormItem>
            <FormItem label="Avaliação" error={errors.rating}>
              <input
                type="range"
                defaultValue={1}
                min={1}
                max={5}
                step="0.5"
                {...register('rating', { valueAsNumber: true })}
              />
            </FormItem>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
