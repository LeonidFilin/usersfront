import { create } from "zustand";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
};

type AuthState = {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;

    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: localStorage.getItem("token"),
    loading: false,
    error: null,

    login: async (email, password) => {
        try {
            set({
                loading: true,
                error: null
            });

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password
                }
            );

            const { user, token } = res.data;

            localStorage.setItem("token", token);

            set({
                user,
                token,
                loading: false
            });

        } catch (error: any) {
            set({
                error: error.response?.data?.message || "Ошибка входа",
                loading: false
            });
        }
    },

    logout: () => {
        localStorage.removeItem("token");

        set({
            user: null,
            token: null
        });
    }
}));