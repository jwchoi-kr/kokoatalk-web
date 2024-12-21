import './styles.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="w-[32rem] h-screen bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
