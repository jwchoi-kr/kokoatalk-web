import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import SignIn from './pages/Unauthenticated/SignIn.tsx';
import React from 'react';
import SignUp from './pages/Unauthenticated/SignUp.tsx';
import UnauthenticatedLayout from './pages/Unauthenticated/UnauthenticatedLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <UnauthenticatedLayout />,
        children: [
          { path: '/', element: <SignIn /> },
          { path: '/signUp', element: <SignUp /> },
        ],
      },
    ],
  },
]);

export default router;
