import { Tables } from "@/src/database.types";
import { supabase } from "@/src/lib/supabase";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("*");

      if (error) throw new Error(error.message);
      return data;
    },
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, description }: Tables<"categories">) => {
      const { data: newCategory, error } = await supabase
        .from("categories")
        .insert({
          name,
          description,
        });

      if (error) throw new Error(error.message);

      return newCategory;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

// export function useGetHotspotsByCategory() {
//   return useQuery({
//     queryKey: ['hotspotsWithCategory'],
//     queryFn: async () => {
//       // 1. Buscars categories
//       // 2.
//     }
//   })
// }
