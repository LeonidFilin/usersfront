import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Navbar() {
  const navigate = useNavigate()

  const { token, logout } = useAuthStore()

  const onLoginClick = () => {
    navigate("/login")
  }

  const onLogOutClick = async () => {
    await logout();
    navigate("/login")
  }

  return (
    <header className="h-20 flex items-center justify-between px-6 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div>
        <div className="text-pink-400 font-extrabold text-xl md:text-2xl tracking-[0.25em] uppercase">
          3D PRINT MARKET
        </div>
        <div className="text-white/40 text-xs uppercase tracking-[0.3em] mt-1">
          Neon Future Store
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Поиск принтера..."
          className="hidden md:block bg-white/5 border border-white/10 px-4 py-2 rounded-xl outline-none text-white placeholder:text-white/30 focus:border-pink-400 transition"
        />
        {
          token ?
            <button onClick={onLogOutClick} className="px-5 py-2 rounded-xl bg-pink-500 text-white font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:scale-105 transition">
              Выйти
            </button>
            :
            <button onClick={onLoginClick} className="px-5 py-2 rounded-xl bg-pink-500 text-white font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:scale-105 transition">
              Войти
            </button>
        }
      </div>
    </header>
  );
}