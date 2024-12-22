import kakaotalkLogo from '@assets/kakaotalk-logo.png';
import { Outlet } from 'react-router-dom';

const UnauthenticatedLayout = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-kakao-yellow">
      <img
        src={kakaotalkLogo}
        alt="logo"
        className="mb-8 h-auto w-40"
      />
      <Outlet />
    </div>
  );
};

export default UnauthenticatedLayout;
