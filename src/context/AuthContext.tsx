import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface AuthContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserIdState] = useState<string | null>(null);

  useEffect(() => {
    // Загружаем при старте из localStorage
    const storedId = localStorage.getItem("userId");

    if (storedId) setUserIdState(storedId);
  }, []);

  const setUserId = (id: string | null) => {
    if (id) {
      localStorage.setItem("userId", id);
    } else {
      localStorage.removeItem("userId");
    }
    setUserIdState(id);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, setUserId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};