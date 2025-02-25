import { supabase } from "@/lib/supabase";
import type { Tables } from "@/types/supabase";

export type User = Tables<"users">;

export const getUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw error;
  return data;
};

export const createUser = async (
  user: Omit<User, "id" | "created_at" | "updated_at">,
) => {
  const { data, error } = await supabase
    .from("users")
    .insert(user)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateUser = async (id: number, user: Partial<User>) => {
  const { data, error } = await supabase
    .from("users")
    .update(user)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteUser = async (id: number) => {
  const { error } = await supabase.from("users").delete().eq("id", id);
  if (error) throw error;
};
