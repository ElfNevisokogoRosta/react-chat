import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import DashboardLayout from '../layouts/DashboardLayout.tsx';
import UserLayout from '../layouts/UserLayout.tsx';
import UserPage from '../pages/UserPage.tsx';
import ChatLayout from '../layouts/ChatLayout.tsx';
import ChatPage from '../pages/ChatPage.tsx';
import RequireAuth from '../utils/hooks/RequireAuth.tsx';
import MainLayout from '../layouts/MainLayout.tsx';
import HelloWorldPage from '../pages/HelloWorldPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HelloWorldPage />,
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        ),
      },
      {
        path: 'users',
        element: (
          <RequireAuth>
            <UserLayout />
          </RequireAuth>
        ),
        children: [
          {
            path: ':userId',
            element: <UserPage />,
          },
        ],
      },
      {
        path: 'chats',
        element: (
          <RequireAuth>
            <ChatLayout />
          </RequireAuth>
        ),
        children: [
          {
            path: ':chatId',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
