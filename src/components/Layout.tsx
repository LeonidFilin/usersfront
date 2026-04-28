import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0b0b14] text-white">
      <Sidebar />

      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />

        <main className="flex-1 p-6 bg-gradient-to-br from-[#0b0b14] via-[#161625] to-[#0f172a]">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};