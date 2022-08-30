import { FC, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const themeToggleHandler = () => {
    const mainHTML = document.querySelector('html');
    mainHTML?.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="box-border flex items-center justify-between w-full p-6">
      <h1 className="m-0 text-2xl font-bold text-dark-grey font-SpaceMono dark:text-white">
        devfinder
      </h1>
      <div
        className="flex items-center justify-center gap-2 text-light-navy dark:text-white"
        onClick={themeToggleHandler}
      >
        <p className="text-sm font-bold tracking-widest uppercase font-SpaceMono">
          {!isDarkMode ? 'dark' : 'light'}
        </p>
        {!isDarkMode ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
      </div>
    </nav>
  );
};

export default Navbar;
