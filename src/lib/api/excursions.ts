import { supabase } from "@/lib/supabase";
import type { Tables } from "@/types/supabase";

export type Excursion = Tables<"excursions">;

export const getExcursions = async () => {
  const { data, error } = await supabase.from("excursions").select("*");
  if (error) throw error;
  return data;
};

export const createExcursion = async (
  excursion: Omit<Excursion, "id" | "created_at" | "updated_at">,
) => {
  const { data, error } = await supabase
    .from("excursions")
    .insert(excursion)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateExcursion = async (
  id: number,
  excursion: Partial<Excursion>,
) => {
  const { data, error } = await supabase
    .from("excursions")
    .update(excursion)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteExcursion = async (id: number) => {
  const { error } = await supabase.from("excursions").delete().eq("id", id);
  if (error) throw error;
};

export const getExcursionImages = async (excursionId: number) => {
  const { data, error } = await supabase
    .from("excursion_images")
    .select("*")
    .eq("excursion_id", excursionId);
  if (error) throw error;
  return data;
};

export const addExcursionImage = async (
  excursionId: number,
  imageUrl: string,
) => {
  const { data, error } = await supabase
    .from("excursion_images")
    .insert({ excursion_id: excursionId, image_url: imageUrl })
    .select()
    .single();
  if (error) throw error;
  return data;
};
