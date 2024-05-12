import { Outlet } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';

export const Layout = () => {
  return (
    <div className='bg-slate-50 min-h-dvh'>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
