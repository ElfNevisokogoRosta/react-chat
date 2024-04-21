import {z} from "zod";

export const LoginSchema = z.object({
  email: z.string({required_error: 'Email address is required'}).email('Email must be valid'),
  password: z.string().min(6, 'Password must be at least 6 symbols').max(58)
})