import HeaderForm from './HeaderForm';
import HeaderIcons from './HeaderIcons';
import HeaderMiniNavBar from './HeaderMiniNavBar';
import HeaderNavBar from "./HeaderNavBar";

const Header = () => (
  <header className="flex flex-col justify-between items-center w-screen bg-[#4e183a]">
    <div className='lg:flex sm:gap-10 px-2'>
      <p className="flex items-start text-xl sm:text-3xl text-white font-extrabold uppercase pb-1 sm:pt-1 animate__animated animate__fadeInDown">
      VINOGOURMET
      </p>
      <div className='w-100 '>
        <div className='flex gap-5 sm:mt-2 h-7'>
          <HeaderForm />
          <HeaderIcons />
          <HeaderMiniNavBar />
        </div>
        <HeaderNavBar />
      </div>
    </div>
  </header>
);

export default Header