'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchProduct = async (lang, productId) => {
    const token = localStorage.getItem("token");
    const headers = {
        "x-localization": lang,
      };
      if (token) headers.Authorization = `Bearer ${token}`;
    const response = await axios.get(
        `${API_BASE_URL}/product/${productId}`,
        {headers}
    );
    return response.data.data;

}
export const useGetProduct = (lang, productId) => {

  const query = useQuery({
    queryKey: ["product" + productId],
    queryFn: () => fetchProduct(lang, productId),
    // only run when we have lang and a country id
    enabled: Boolean(lang) && (productId !== undefined && productId !== null),
    staleTime: 1000 * 60, // 1 minute (adjust as you want)
    cacheTime: 1000 * 60 * 5,
  });

  return query;
};
