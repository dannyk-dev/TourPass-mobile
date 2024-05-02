import { supabase } from "@/src/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("todo").select("*");

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
