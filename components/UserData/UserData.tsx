import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';
import Spinner from '../Spinner/Spinner';

const UserData: FC = () => {
  const { user } = userStore();

  const { data, loading } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  return (
    <div className="flex items-center w-full justify-evenly bg-white-one dark:bg-darker-navy min-h-[85px] rounded-xl">
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center md:items-start">
            <p className="text-xs text-light-navy dark:text-white">Repos</p>
            <h4 className="text-base font-bold md:text-xl md:mt-2 text-dark-grey dark:text-white">
              {data?.user?.repositories.totalCount}
            </h4>
          </div>
          <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center md:items-start">
            <p className="text-xs text-light-navy dark:text-white">Followers</p>
            <h4 className="text-base font-bold md:text-xl md:mt-2 text-dark-grey dark:text-white">
              {data?.user?.followers.totalCount}
            </h4>
          </div>
          <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center md:items-start">
            <p className="text-xs text-light-navy dark:text-white">Following</p>
            <h4 className="text-base font-bold md:text-xl md:mt-2 text-dark-grey dark:text-white">
              {data?.user?.following.totalCount}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default UserData;
