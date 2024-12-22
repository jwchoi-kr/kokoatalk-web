import { useAuth } from '../contexts/authContext.tsx';
import { Navigate } from 'react-router-dom';

interface ProtectedRouterProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRouter = ({
  children,
  redirectTo = '/auth/signIn',
}: ProtectedRouterProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default ProtectedRouter;
