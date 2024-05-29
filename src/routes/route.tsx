import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import DashboardLayout from '../layouts/DashboardLayout.tsx';
import UserLayout from '../layouts/UserLayout.tsx';
import UserPage from '../pages/UserPage.tsx';
import RequireAuth from '../utils/hooks/RequireAuth.tsx';
import MainLayout from '../layouts/MainLayout.tsx';
import HelloWorldPage from '../pages/HelloWorldPage.tsx';
import HomePage from '../pages/HomePage.tsx';
import ChatRoom from '../components/Chat/ChatRoom.tsx';
import AuthProvider from '../context/AuthContext.tsx';
import ModalProvider from '../context/ModalContext.tsx';
import { WebSocketProvider } from '../context/WebSocketContext.tsx';
import { socket } from '../utils/socket.ts';
import FriendsPage from '../pages/FriendsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <ModalProvider>
          <MainLayout />
        </ModalProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: '',
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
        children: [
          {
            path: '',
            element: <HomePage />,
          },
          {
            path: ':chatId',
            element: (
              <WebSocketProvider value={socket}>
                <ChatRoom />
              </WebSocketProvider>
            ),
          },
        ],
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
        path: 'friends',
        element: (
          <RequireAuth>
            <FriendsPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default router;
