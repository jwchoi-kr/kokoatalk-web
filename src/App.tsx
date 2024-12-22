import './styles/styles.css';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext.tsx';

function App() {
  return (
    <AuthProvider>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="h-screen w-[32rem] overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg">
          <Outlet />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
