import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

type User = {
  id: string;
  name: string;
  role: string;
  username: string;
};

type UserPayload = {
  id: string;
  name: string;
  role: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<UserPayload>(token);

        setUser({
          id: decoded.id,
          name: decoded.name,
          role: decoded.role,
          username: decoded.username,
        });
      } catch {
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);

    const decoded = jwtDecode<UserPayload>(token);

    setUser({
      id: decoded.id,
      name: decoded.name,
      role: decoded.role,
      username: decoded.username,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
