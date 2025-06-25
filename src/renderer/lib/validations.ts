import { z } from 'zod';

export const ServerConnectValidation = z
  .object({
    name: z.string().min(1, 'This field is required.'),
    groupId: z.string().min(1, 'This field is required.'),
    color: z.string().min(1, 'This field is required.'),
    avatar: z
      .instanceof(File, { message: 'This field is required.' })
      .or(z.null()),
    password: z.string().min(1, 'This field is required.'),
    confirmPassword: z.string().min(1, 'This field is required.'),
    secret: z.string().min(1, 'This field is required.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });
