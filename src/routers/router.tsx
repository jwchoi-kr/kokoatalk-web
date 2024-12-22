import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import SignIn from '../pages/Unauthenticated/SignIn.tsx';
import React from 'react';
import SignUp from '../pages/Unauthenticated/SignUp.tsx';
import UnauthenticatedLayout from '../pages/Unauthenticated/UnauthenticatedLayout.tsx';
import ProtectedRouter from './ProtectedRouter.tsx';
import AuthenticatedLayout from '../pages/Authenticated/AuthenticatedLayout.tsx';
import FriendsList from '../pages/Authenticated/FriendsList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRouter>
            <AuthenticatedLayout />
          </ProtectedRouter>
        ),
        children: [{ index: true, element: <FriendsList /> }],
      },
      {
        path: 'auth',
        element: <UnauthenticatedLayout />,
        children: [
          { path: 'signIn', element: <SignIn /> },
          { path: 'signUp', element: <SignUp /> },
        ],
      },
    ],
  },
]);

export default router;
