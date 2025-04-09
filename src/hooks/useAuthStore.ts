import { create } from "zustand";
import Role from "../types/auth";
import { jwtDecode } from "jwt-decode";

type User = {
    id: number;
    name: string;
    role: Role;
    exp: number;
};

type AuthState = {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
    isValidSession: () => boolean;
};

const decodeToken = (token: string): User | null => {
    try {
        return jwtDecode<User>(token);
    } catch (err) {
        return null;
    }
};

const useAuthStore = create<AuthState>((set) => ({
    user: decodeToken(localStorage.getItem("token") || ""), // Restore session if token exists

    login: (token) => {
        localStorage.setItem("token", token);
        const user = decodeToken(token)
        set({ user });
        console.log(user);
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
    },

    isValidSession: () => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (!token) return false;

        const user = decodeToken(token);
        console.log(JSON.stringify(user));
        if (!user) return false;

        return user.exp * 1000 > new Date().getTime(); // Token still valid
    }
}));

export default useAuthStore;
