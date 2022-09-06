import { useState, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import userStore from '../../helpers/userStore';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import { ApolloError } from '@apollo/client';

const SearchBar = () => {
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [userError, setUserError] = useState<boolean>(false);
  const { user, setUser } = userStore();

  const { error } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  const searchUserHandler = () => {
    if (searchedUser === '') {
      setUserError(true);
    } else {
      setUserError(false);
      setUser(searchedUser);
    }
  };

  useEffect(() => {
    if (error) {
      setUser('Octocat');
      setUserError(true);
    }
  }, [error]);

  return (
    <div className="flex w-full mt-4 bg-white text-git-blue min-h-[60px] justify-between items-center px-4 rounded-xl gap-2 shadow-md dark:bg-dark-navy">
      <RiSearch2Line size={20} />
      <div className="flex items-center justify-between w-full gap-2">
        <input
          type="text"
          className={`${
            userError ? 'w-1/3' : 'w-full'
          } h-[25px] bg-transparent font-SpaceMono text-xs outline-none text-dark-grey caret-git-blue dark:text-white`}
          placeholder="Search Github username..."
          onChange={(event) => {
            setSearchedUser(event.target.value);
          }}
        />
        <div className="flex items-center justify-between gap-2">
          {userError && (
            <p className="text-xs font-bold text-red-500 font-SpaceMono">
              No Results
            </p>
          )}
          <button
            className="px-4 py-3 text-sm font-bold text-white rounded-xl bg-git-blue font-SpaceMono hover:bg-git-blue/70"
            onClick={searchUserHandler}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
