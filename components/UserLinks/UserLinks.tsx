import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';

import { MdLocationPin } from 'react-icons/md';
import { BsLink45Deg, BsTwitter, BsBuilding } from 'react-icons/bs';

const UserLinks: FC = () => {
  const { user } = userStore();

  const { data } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  return (
    <div className="min-h-[127px] flex flex-col gap-2">
      {data?.user?.location ? (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
          <MdLocationPin size={22} />
          <p className="text-xs">{data?.user?.location}</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy/50 dark:text-white/50">
          <MdLocationPin size={22} />
          <p className="text-xs">Not Available</p>
        </div>
      )}
      {data?.user?.websiteUrl ? (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
          <BsLink45Deg size={22} />
          <a href={`https://${data?.user?.websiteUrl}`} target="_blank">
            <p className="text-xs">{data?.user?.websiteUrl}</p>
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy/50 dark:text-white/50">
          <BsLink45Deg size={22} />
          <p className="text-xs">Not Available</p>
        </div>
      )}
      {data?.user?.twitterUsername ? (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
          <BsTwitter size={22} />
          <a
            href={`https://twitter.com/${data?.user?.twitterUsername}`}
            target="_blank"
          >
            <p className="text-xs">{data?.user?.twitterUsername}</p>
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy/50 dark:text-white/50">
          <BsTwitter size={22} />
          <p className="text-xs">Not Available</p>
        </div>
      )}
      {data?.user?.company ? (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
          <BsBuilding size={22} />
          <p className="text-xs">{data?.user?.company}</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 font-SpaceMono text-light-navy/50 dark:text-white/50">
          <BsBuilding size={22} />
          <p className="text-xs">Not Available</p>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
