import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

const SearchBar = () => {
  return (
    <form className="flex w-full mt-4 bg-white text-git-blue min-h-[60px] justify-between items-center px-4 rounded-xl gap-2 shadow-md">
      <RiSearch2Line size={20} />
      <div className="flex items-center w-full gap-2">
        <input
          type="text"
          className="w-full h-[25px] bg-transparent font-SpaceMono text-xs outline-none text-dark-grey caret-git-blue"
          placeholder="Search Github username..."
        />
        <button className="px-4 py-3 text-sm font-bold text-white rounded-xl bg-git-blue font-SpaceMono hover:bg-git-blue/70">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
