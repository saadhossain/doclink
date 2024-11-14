import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Specialities from '@/pages/Specialities';
import { createBrowserRouter } from 'react-router-dom';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/specialities',
                element: <Specialities />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])