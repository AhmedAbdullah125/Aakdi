'use client';
import { API_BASE_URL } from '@/lib/apiConfig';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

// Optional: give a better default shape than `0`
export const CounterContext = React.createContext({
  cartCont: [],
  cartHandling: () => {},
  cartTotalPrice: 0,
  cartTrigger: false,
  setCartTrigger: () => {},
});

export function CounterProvider({ children }) {
  const [cartCont, setCartCont] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartTrigger, setCartTrigger] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // move localStorage reads into state set *after* mount
  const [token, setToken] = useState(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== 'undefined') {
      try {
        setToken(localStorage.getItem('token'));
        setLang(localStorage.getItem('lang') || 'en');

        // optional: hydrate cart from cache
        const cached = localStorage.getItem('cart');
        if (cached) {
          const parsed = JSON.parse(cached);
          setCartCont(parsed);
          const total = (parsed || []).reduce((s, i) => s + Number(i?.price || 0), 0);
          setCartTotalPrice(total);
        }
      } catch (e) {
        console.error('Init from localStorage failed:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (!hasMounted || !token) return;

    let cancelled = false;

    const getCart = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/cart`, {
          headers: {
            'x-localization': lang,
            Authorization: `Bearer ${token}`,
          },
        });

        if (cancelled) return;

        const cart = response?.data?.data ?? [];
        setCartCont(cart);
        const total = cart.reduce((sum, item) => sum + Number(item?.price || 0), 0);
        setCartTotalPrice(total);
      } catch (error) {
        console.error('Error retrieving cart:', error);
      }
    };

    getCart();
    return () => {
      cancelled = true;
    };
  }, [hasMounted, token, lang, cartTrigger]);

  const cartHandling = useCallback((product) => {
    setCartCont(product);
    const total = (product || []).reduce((s, i) => s + Number(i?.price || 0), 0);
    setCartTotalPrice(total);

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(product));
      }
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, []);

  // Prevent SSR hydration mismatch
  if (!hasMounted) return null;

  return (
    <CounterContext.Provider
      value={{ cartCont, cartHandling, cartTotalPrice, cartTrigger, setCartTrigger }}
    >
      {children}
    </CounterContext.Provider>
  );
}
