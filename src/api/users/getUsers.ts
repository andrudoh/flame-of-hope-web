import useSWR from "swr";
import { createUrl } from "@/utils/createUrl";
import type { UsersResponseDTO } from "./users.schema";
import { usersResponseSchema } from "./users.schema";
import { API_BASE_URL } from "@/constants/api";

const fetchUsers = async (url: string): Promise<UsersResponseDTO> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch users");
  const data = await response.json();
  return usersResponseSchema.parse(data);
};

export type UseGetUsersParams = {
  search?: string;
  limit?: number;
};

export const getUsersKey = (params?: UseGetUsersParams) =>
  createUrl(`${API_BASE_URL}/api/users`, params);

export const useGetUsers = (params?: UseGetUsersParams) =>
  useSWR<UsersResponseDTO>(getUsersKey(params), fetchUsers);
