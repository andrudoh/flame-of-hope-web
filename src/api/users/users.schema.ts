import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type UserDTO = z.infer<typeof userSchema>;

export const usersResponseSchema = z.object({
  users: z.array(userSchema),
  total: z.number(),
});

export type UsersResponseDTO = z.infer<typeof usersResponseSchema>;
