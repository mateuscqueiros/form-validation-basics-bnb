import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  value: z.number({ message: 'O valor é obrigatório' }),
  brand: z.string({ message: 'A marca é obrigatória' }),
  rating: z
    .number({ message: 'A avaliação é obrigatória' })
    .min(1, { message: 'O valor deve ser no mínimo 1' })
    .max(5, { message: 'O valor deve ser no máximo 5' }),
});

export type ProductFormType = z.infer<typeof productSchema>;
