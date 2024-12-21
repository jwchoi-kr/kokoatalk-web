import kakaotalkLogo from '@assets/kakaotalk-logo.png';
import { Outlet } from 'react-router-dom';

const UnauthenticatedLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-kakao-yellow h-screen">
      <img
        src={kakaotalkLogo}
        alt="logo"
        className="w-40 h-auto mb-8"
      />
      <Outlet />
    </div>
  );
};

export default UnauthenticatedLayout;
