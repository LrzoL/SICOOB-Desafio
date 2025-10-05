import type { Course } from "../types/couser";
import { supabase } from "./supabaseClient";

export async function getFeaturedCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("featured_courses")
    .select("*");

  if (error) {
    console.error("Erro ao buscar cursos:", error);
    return [];
  }

  return data || [];
}
