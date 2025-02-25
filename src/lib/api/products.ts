import { supabase } from "@/lib/supabase";
import type { Tables } from "@/types/supabase";

export type Product = Tables<"products">;

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data;
};

export const createProduct = async (
  product: Omit<Product, "id" | "created_at" | "updated_at">,
) => {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateProduct = async (id: number, product: Partial<Product>) => {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteProduct = async (id: number) => {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
};
