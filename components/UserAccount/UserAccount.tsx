import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';
import Moment from 'react-moment';
import Image from 'next/image';

const UserAccount: FC = () => {
  const { user } = userStore();

  const { data } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  console.log(data?.user);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full gap-4">
        <div className="w-[70px] h-[70px]">
          {data?.user?.avatarUrl ? (
            <a href={data?.user?.url} target="_blank">
              <Image
                className="rounded-full"
                width={70}
                height={70}
                src={data?.user?.avatarUrl}
              />
            </a>
          ) : (
            <div className="w-full h-full text-transparent bg-gray-300 rounded-full">
              -
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between font-SpaceMono">
          <h4 className="text-base font-bold text-dark-grey dark:text-white">
            {data?.user?.name}
          </h4>
          <p className="text-xs text-git-blue">@{data?.user?.login}</p>
          <p className="text-xs text-light-grey dark:text-white">
            Joined <Moment format="MMM DD YYYY">{data?.user?.createdAt}</Moment>
          </p>
        </div>
      </div>
      <div className="w-full min-h-[75px]">
        <p className="text-xs leading-6 font-SpaceMono text-light-navy dark:text-white">
          {data?.user?.bio !== '' ? data?.user?.bio : 'This user has no bio'}
        </p>
      </div>
    </div>
  );
};

export default UserAccount;
