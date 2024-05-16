import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ProductFormType, productSchema } from '../types';
import { FormItem } from './FormItem';

export type ProductFormProps = {
  onSubmit?: (data: ProductFormType) => void;
};

export function ProductForm({ onSubmit }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
  });

  return (
    <form
      className="flex flex-col gap-5 w-[300px]"
      onSubmit={onSubmit && handleSubmit(onSubmit)}
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
  );
}
