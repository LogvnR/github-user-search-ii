import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import userStore from '../../helpers/userStore';

const SearchBar = () => {
  const [searchedUser, setSearchedUser] = useState<string>('');
  const { setUser } = userStore();

  const searchUserHandler = () => {
    setUser(searchedUser);
  };

  return (
    <div className="flex w-full mt-4 bg-white text-git-blue min-h-[60px] justify-between items-center px-4 rounded-xl gap-2 shadow-md dark:bg-dark-navy">
      <RiSearch2Line size={20} />
      <div className="flex items-center w-full gap-2">
        <input
          type="text"
          className="w-full h-[25px] bg-transparent font-SpaceMono text-xs outline-none text-dark-grey caret-git-blue dark:text-white"
          placeholder="Search Github username..."
          onChange={(event) => {
            setSearchedUser(event.target.value);
          }}
        />
        <button
          className="px-4 py-3 text-sm font-bold text-white rounded-xl bg-git-blue font-SpaceMono hover:bg-git-blue/70"
          onClick={searchUserHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
