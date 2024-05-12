import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';


export const NavigationBar = () => {
  return (
    <nav className='flex items-center p-6 gap-6 bg-white border-b border-b-slate-200 h-[60px]'>
      <div>
        <Link to="/" className='flex items-center  gap-2 text-xl font-bold text-slate-900'>
          <img className='h-8' src={Logo} alt="Ateneo Logo" />
          Ateneo <span className='font-medium'>Central</span>
        </Link>
      </div>
      <ul className='flex gap-4'>
        <li>
          <Link className='hover:text-slate-500 transition duration-200' to="/">Dashboard</Link>
        </li>
        <li>
          <Link className='hover:text-slate-500 transition duration-200' to="/add">Add Student</Link>
        </li>
      </ul>
    </nav>
  );
};
