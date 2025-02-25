import { supabase } from "@/lib/supabase";
import type { Tables } from "@/types/supabase";

export type House = Tables<"houses">;

export const getHouses = async () => {
  const { data, error } = await supabase.from("houses").select("*");
  if (error) throw error;
  return data;
};

export const createHouse = async (
  house: Omit<House, "id" | "created_at" | "updated_at">,
) => {
  const { data, error } = await supabase
    .from("houses")
    .insert(house)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateHouse = async (id: number, house: Partial<House>) => {
  const { data, error } = await supabase
    .from("houses")
    .update(house)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteHouse = async (id: number) => {
  const { error } = await supabase.from("houses").delete().eq("id", id);
  if (error) throw error;
};

export const getHouseImages = async (houseId: number) => {
  const { data, error } = await supabase
    .from("house_images")
    .select("*")
    .eq("house_id", houseId);
  if (error) throw error;
  return data;
};

export const addHouseImage = async (houseId: number, imageUrl: string) => {
  const { data, error } = await supabase
    .from("house_images")
    .insert({ house_id: houseId, image_url: imageUrl })
    .select()
    .single();
  if (error) throw error;
  return data;
};
