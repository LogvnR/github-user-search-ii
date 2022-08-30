import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="box-border flex items-center justify-between w-full p-6">
      <h1 className="m-0 text-2xl font-bold text-white font-SpaceMono">
        devfinder
      </h1>
      <div>light</div>
    </nav>
  );
};

export default Navbar;
