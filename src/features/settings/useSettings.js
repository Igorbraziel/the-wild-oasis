import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useSettings(){
  const { data: settings, isLoading, error } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"]
  })

  if(error){
    console.error(error);
    throw new Error("The Settings couldn't be loaded");
  }

  return { settings, isLoading };
}