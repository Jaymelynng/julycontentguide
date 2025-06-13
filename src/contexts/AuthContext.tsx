import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  gymName: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (gymName: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Predefined gym credentials
const gymCredentials = {
  'capital-cedar-park': { password: 'gym2024', name: 'Capital Gymnastics - Cedar Park' },
  'capital-pflugerville': { password: 'gym2024', name: 'Capital Gymnastics - Pflugerville' },
  'capital-round-rock': { password: 'gym2024', name: 'Capital Gymnastics - Round Rock' },
  'estrella': { password: 'gym2024', name: 'Estrella Gymnastics' },
  'houston': { password: 'gym2024', name: 'Houston Gymnastics Academy' },
  'oasis': { password: 'gym2024', name: 'Oasis Gymnastics' },
  'rb-atascocita': { password: 'gym2024', name: 'RB Atascocita' },
  'rb-kingwood': { password: 'gym2024', name: 'RB Kingwood' },
  'scottsdale': { password: 'gym2024', name: 'Scottsdale Gymnastics & Trampoline' },
  'tigar': { password: 'gym2024', name: 'TIGAR Gymnastics' },
  'admin': { password: 'admin2024', name: 'Administrator' }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing session
    const savedUser = Cookies.get('gym-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        Cookies.remove('gym-user');
      }
    }
  }, []);

  const login = (gymId: string, password: string): boolean => {
    const gym = gymCredentials[gymId as keyof typeof gymCredentials];
    
    if (gym && gym.password === password) {
      const newUser: User = {
        id: gymId,
        gymName: gym.name,
        isAdmin: gymId === 'admin'
      };
      
      setUser(newUser);
      Cookies.set('gym-user', JSON.stringify(newUser), { expires: 30 }); // 30 days
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('gym-user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isAdmin: user?.isAdmin || false
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}