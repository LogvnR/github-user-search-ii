import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';

import { MdLocationPin } from 'react-icons/md';
import { BsLink45Deg, BsTwitter, BsBuilding } from 'react-icons/bs';
import Spinner from '../Spinner/Spinner';

const UserLinks: FC = () => {
  const { user } = userStore();

  const { data, loading } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  return (
    <div
      className={`min-h-[127px] flex  ${
        loading ? 'flex-row items-center w-full' : 'flex-col'
      } gap-2 md:gap-4 md:flex-row md:flex-wrap md:justify-start`}
    >
      {loading && <Spinner />}
      {!loading && (
        <>
          <div
            className={`flex items-center gap-3 md:w-[300px] font-SpaceMono ${
              data?.user?.location
                ? 'text-light-navy dark:text-white'
                : 'text-light-navy/50 dark:text-white/50'
            }`}
          >
            <MdLocationPin size={22} />
            <p className="text-xs md:text-base">
              {data?.user?.location ? data?.user?.location : 'Not Available'}
            </p>
          </div>

          <div
            className={`flex items-center gap-3 md:w-[300px] font-SpaceMono ${
              data?.user?.websiteUrl
                ? 'text-light-navy dark:text-white'
                : 'text-light-navy/50 dark:text-white/50'
            }`}
          >
            <BsLink45Deg size={22} />
            <a
              href={`https://${data?.user?.websiteUrl}`}
              target="_blank"
              rel="noreferrer"
              className={`${
                data?.user?.websiteUrl ? '' : 'pointer-events-none'
              }`}
            >
              <p className="text-xs md:text-base">
                {data?.user?.websiteUrl
                  ? data?.user?.websiteUrl
                  : 'Not Available'}
              </p>
            </a>
          </div>

          <div
            className={`flex items-center gap-3 md:w-[300px] font-SpaceMono  ${
              data?.user?.twitterUsername
                ? 'text-light-navy dark:text-white'
                : 'text-light-navy/50 dark:text-white/50'
            }`}
          >
            <BsTwitter size={22} />
            <a
              href={`https://twitter.com/${data?.user?.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
              className={`${
                data?.user?.twitterUsername ? '' : 'pointer-events-none'
              }`}
            >
              <p className="text-xs md:text-base">
                {data?.user?.twitterUsername
                  ? data?.user?.twitterUsername
                  : 'Not Available'}
              </p>
            </a>
          </div>

          <div
            className={`flex items-center gap-3 md:w-[300px] font-SpaceMono ${
              data?.user?.company
                ? 'text-light-navy dark:text-white'
                : 'text-light-navy/50 dark:text-white/50'
            }`}
          >
            <BsBuilding size={22} />
            <p className="text-xs md:text-base">
              {data?.user?.company ? data?.user?.company : 'Not Available'}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserLinks;
