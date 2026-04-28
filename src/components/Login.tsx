import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const Login = () => {
    const navigate = useNavigate();

    const {
        login,
        loading,
        error
    } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        await login(email, password);

        if (localStorage.getItem("token")) {
            navigate("/");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <section className="rounded-2xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-10 max-w-md w-full">

                <h1 className="text-4xl font-bold text-white mb-8 uppercase">
                    Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>
                            setEmail(e.target.value)
                        }
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e)=>
                            setPassword(e.target.value)
                        }
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />

                    {error && (
                        <p className="text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold"
                    >
                        {loading ? "Загрузка..." : "Войти"}
                    </button>

                </form>
            </section>
        </div>
    );
};