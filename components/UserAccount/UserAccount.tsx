import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';

const UserAccount: FC = () => {
  const { user } = userStore();

  const { data, loading } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  console.log(data?.user?.name);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full gap-4">
        <div className="w-[70px] h-[70px]">
          <div className="w-full h-full text-transparent bg-gray-300 rounded-full">
            -
          </div>
        </div>
        <div className="flex flex-col justify-between font-SpaceMono">
          <h4 className="text-base font-bold text-dark-grey dark:text-white">
            The Octocat
          </h4>
          <p className="text-xs text-git-blue">@octocat</p>
          <p className="text-xs text-light-grey dark:text-white">
            Joined 25 Jan 2011
          </p>
        </div>
      </div>
      <div className="w-full min-h-[75px]">
        <p className="text-xs leading-6 font-SpaceMono text-light-navy dark:text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
    </div>
  );
};

export default UserAccount;
