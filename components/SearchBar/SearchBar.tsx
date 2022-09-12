import { useForm, SubmitHandler } from 'react-hook-form';
import userStore from '../../helpers/userStore';
import { useGetUserQuery } from '../../graphql/generated/graphql';

import { RiSearch2Line } from 'react-icons/ri';

interface IFormInputs {
  userName: string;
}

const SearchBar = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const { user, setUser } = userStore();

  const { error } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data): void => {
    setUser(data.userName);
  };

  return (
    <div className="flex w-full mt-4 bg-white text-git-blue min-h-[60px] justify-between items-center px-4 rounded-xl gap-2 md:gap-4 shadow-md dark:bg-dark-navy">
      <RiSearch2Line size={20} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between w-full gap-2"
      >
        <input
          {...register('userName', { required: true })}
          className={`${errors.userName ? 'w-2/3' : 'w-full'} ${
            error ? 'w-1/3' : 'w-full'
          } h-[25px] bg-transparent font-SpaceMono text-xs md:text-base outline-none text-dark-grey caret-git-blue dark:text-white`}
          placeholder="Search Github Username..."
        />
        <div className="flex items-center justify-between gap-2">
          {errors.userName && (
            <p className="text-xs font-bold text-red-500 font-SpaceMono">
              Required!
            </p>
          )}
          {error && (
            <p className="text-xs font-bold text-red-500 font-SpaceMono">
              No Results
            </p>
          )}
          <button className="px-4 py-3 text-sm font-bold text-white rounded-xl bg-git-blue font-SpaceMono hover:bg-git-blue/70">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
