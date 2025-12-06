'use client';
import { API_BASE_URL } from "@/lib/apiConfig";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "@/src/app/loading";

export const ProfileDataContext = React.createContext(0);

export function ProfileDataProvider({ children }) {
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Retrieve token from localStorage
        const savedToken = localStorage.getItem('token');
        setToken(savedToken);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!token) return;

            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data.data);

            } catch (error) {
                console.error('Error retrieving data:', error);
                setError('Could not fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    if (loading) {
        return <Loading />;
    }
    return (
        <ProfileDataContext.Provider value={{ data }}>
            {children}
        </ProfileDataContext.Provider>
    );
}
