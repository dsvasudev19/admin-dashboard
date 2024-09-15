import React, { useContext, createContext, useState, useEffect } from "react";
import { axiosInstance } from "./axiosInstance";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }) => {
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/auth/user-by-token");
      if (res.status === 200) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  } else {
    throw new Error("useAuth must be used within an AuthProvider");
  }
};
