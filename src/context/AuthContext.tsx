import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserProfile {
  email: string;
  name: string;
  isAdmin: boolean;
  createdAt: string;
}

interface AuthContextType {
  currentUser: UserProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  resetPassword: (email: string, newPassword: string) => boolean;
  getUsers: () => UserProfile[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "dispenhogar_users";
const CURRENT_USER_KEY = "dispenhogar_current_user";

interface StoredUser {
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
  createdAt: string;
}

const getStoredUsers = (): StoredUser[] => {
  const stored = localStorage.getItem(USERS_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored) as StoredUser[];
  } catch {
    return [];
  }
};

const saveStoredUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const getStoredCurrentUser = (): UserProfile | null => {
  const stored = localStorage.getItem(CURRENT_USER_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as UserProfile;
  } catch {
    return null;
  }
};

const saveCurrentUser = (user: UserProfile | null) => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

const DEFAULT_ADMIN_EMAIL = "antonellalimarieri9@gmail.com";
const DEFAULT_ADMIN_PASSWORD = "antonella07";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedUser = getStoredCurrentUser();
    if (storedUser) {
      setCurrentUser(storedUser);
    }

    const users = getStoredUsers();
    const hasAdmin = users.some((user) => user.isAdmin);
    if (!hasAdmin) {
      const adminUser: StoredUser = {
        email: DEFAULT_ADMIN_EMAIL,
        password: DEFAULT_ADMIN_PASSWORD,
        name: "Administrador",
        isAdmin: true,
        createdAt: new Date().toISOString(),
      };
      saveStoredUsers([adminUser, ...users]);
    }
  }, []);

  const login = (email: string, password: string) => {
    const users = getStoredUsers();
    const found = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (!found) {
      return false;
    }

    const profile: UserProfile = {
      email: found.email,
      name: found.name,
      isAdmin: found.isAdmin,
      createdAt: found.createdAt,
    };

    setCurrentUser(profile);
    saveCurrentUser(profile);
    return true;
  };

  const register = (email: string, password: string, name: string) => {
    const users = getStoredUsers();
    const exists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return false;
    }

    const newUser: StoredUser = {
      email,
      password,
      name: name || email.split("@")[0],
      isAdmin: false,
      createdAt: new Date().toISOString(),
    };

    saveStoredUsers([...users, newUser]);
    const profile: UserProfile = {
      email: newUser.email,
      name: newUser.name,
      isAdmin: newUser.isAdmin,
      createdAt: newUser.createdAt,
    };

    setCurrentUser(profile);
    saveCurrentUser(profile);
    return true;
  };

  const resetPassword = (email: string, newPassword: string) => {
    const users = getStoredUsers();
    const index = users.findIndex(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (index === -1) {
      return false;
    }

    users[index].password = newPassword;
    saveStoredUsers(users);

    if (currentUser?.email.toLowerCase() === email.toLowerCase()) {
      const updatedProfile: UserProfile = {
        email: currentUser.email,
        name: currentUser.name,
        isAdmin: currentUser.isAdmin,
        createdAt: currentUser.createdAt,
      };
      setCurrentUser(updatedProfile);
      saveCurrentUser(updatedProfile);
    }

    return true;
  };

  const getUsers = () => {
    return getStoredUsers().map((user) => ({
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    }));
  };

  const logout = () => {
    setCurrentUser(null);
    saveCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn: Boolean(currentUser),
        login,
        register,
        logout,
        resetPassword,
        getUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
