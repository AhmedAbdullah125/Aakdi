'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchBrands = async (lang) => {
    const token = localStorage.getItem("token");
    const headers = {
        "x-localization": lang,
      };
      if (token) headers.Authorization = `Bearer ${token}`;
    const response = await axios.get(
        `${API_BASE_URL}/general/brands`,
        {headers}
    );
    return response.data.data;

}

export const useGetBrands = (lang ) => {

  const query = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchBrands(lang),
    // only run when we have lang and a country id
    enabled: Boolean(lang),
    staleTime: 1000 * 60, // 1 minute (adjust as you want)
    cacheTime: 1000 * 60 * 5,
  });

  return query;
};
