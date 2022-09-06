import { FC, useState, useEffect } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar: FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const themeToggleHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
    const mainHTML = document.querySelector('html');
    mainHTML?.classList.toggle('dark');
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setTheme('dark');
      document?.querySelector('html')?.classList.add('dark');
    } else {
      document?.querySelector('html')?.classList.remove('dark');
    }
  }, [setTheme]);

  return (
    <nav className="box-border flex items-center justify-between w-full">
      <h1 className="m-0 text-2xl font-bold text-dark-grey font-SpaceMono dark:text-white">
        devfinder
      </h1>
      <div
        className="flex items-center justify-center gap-2 text-light-navy dark:text-white"
        onClick={themeToggleHandler}
      >
        <p className="text-sm font-bold tracking-widest uppercase font-SpaceMono">
          {theme === 'light' ? 'dark' : 'light'}
        </p>
        {theme === 'light' ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
      </div>
    </nav>
  );
};

export default Navbar;
