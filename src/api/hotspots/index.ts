import { Tables } from "@/src/database.types";
import { supabase } from "@/src/lib/supabase";
import { useQuery } from "react-query";

export function useGetAllHotspots() {
  return useQuery({
    queryKey: ["hotspots"],
    queryFn: async () => {
      const { data: hotspots, error } = await supabase
        .from("hotspots")
        .select("*");

      if (error) throw new Error(error.message);
      return hotspots;
    },
  });
}

export function useGetAllHotspotsWithCategory() {
  return useQuery({
    queryKey: ["hotspot_categories"],
    queryFn: async () => {
      const { data: hotspotWithCategories, error } = await supabase.from(
        "hotspots"
      ).select(`
        *,
        category_hotspots (
          id
        ) 
      `);

      if (error) throw new Error(error.message);
      return hotspotWithCategories;
    },
  });
}
