import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string({
      invalid_type_error: 'Password must be at least 6 symbols',
      required_error: 'Password required',
    })
    .min(6),
});
