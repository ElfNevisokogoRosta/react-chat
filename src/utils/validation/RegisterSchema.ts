import {z} from 'zod';

export const RegisterSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string({
    invalid_type_error: 'Password must be at least 6 symbols',
    required_error: "Password required"
  }).min(6),
  confirmPassword: z.string().min(6)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirm"],
});
