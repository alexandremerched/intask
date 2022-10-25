import { useState, createContext, useContext } from "react";

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials extends SignInCredentials { }

interface AuthContextData {
  isAuthenticaded: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticaded: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticaded, setIsAuthenticated] = useState(false);

  const signIn = async (credentials: SignInCredentials) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsAuthenticated(true);
  };

  const signUp = async (credentials: SignUpCredentials) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticaded,
      signIn,
      signUp,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}