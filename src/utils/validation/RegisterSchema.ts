import {z} from 'zod';

export const RegisterSchema = z.object({
  username: z.string().max(58).trim(),
  email: z.string({required_error: 'Email address is required'}).email('Email must be valid'),
  password: z.string().min(6, 'Password must be at least 6 symbols').max(58),
  confirmPassword: z.string().min(6).max(58),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirm"],
});