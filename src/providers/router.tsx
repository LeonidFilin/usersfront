import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/Layout";
import { Home } from "../components/Home";
import { Login } from "../components/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },

    {
        path: "/login",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
        ]
    }
]);