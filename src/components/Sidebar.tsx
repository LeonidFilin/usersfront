import { Cpu, Box, ShoppingCart, Settings } from "lucide-react";
import type { ReactNode } from "react";

export default function Sidebar() {
  return (
    <aside className="w-20 md:w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 flex flex-col items-center md:items-start p-4 gap-8">
      <div className="hidden md:block">
        <h1 className="text-pink-400 font-extrabold text-2xl tracking-[0.3em] uppercase">
          PRINT3D
        </h1>
        <p className="text-white/40 text-xs uppercase tracking-[0.25em] mt-1">
          Vice Tech Edition
        </p>
      </div>

      <nav className="flex flex-col gap-3 w-full">
        <NavItem icon={<Box size={20} />} label="Каталог" />
        <NavItem icon={<ShoppingCart size={20} />} label="Корзина" />
        <NavItem icon={<Cpu size={20} />} label="Принтеры" />
        <NavItem icon={<Settings size={20} />} label="Настройки" />
      </nav>
    </aside>
  );
}

type NavItemProps = {
  icon: ReactNode;
  label: string;
};

function NavItem({ icon, label }: NavItemProps) {
  return (
    <div className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-white/70 hover:text-pink-400 hover:bg-white/5 cursor-pointer transition">
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="hidden md:block font-medium tracking-wide">{label}</span>
    </div>
  );
}