'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchHome = async (lang, country) => {
    const token = localStorage.getItem("token");
    const headers = {
        "x-localization": lang,
      };
      if (token) headers.Authorization = `Bearer ${token}`;
    const response = await axios.get(
        `${API_BASE_URL}/home?country_id=${country}`,
        {headers}
    );
    return response.data.data;

}

export const useGetHome = (lang, country) => {

  const query = useQuery({
    queryKey: ["home" + lang + country],
    queryFn: () => fetchHome(lang, country),
    // only run when we have lang and a country id
    enabled: Boolean(lang) && (country !== undefined && country !== null),
    staleTime: 1000 * 60, // 1 minute (adjust as you want)
    cacheTime: 1000 * 60 * 5,
  });

  return query;
};
