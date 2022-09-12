import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';
import NoResults from '../NoResults/NoResults';

import UserAccount from '../UserAccount/UserAccount';
import UserData from '../UserData/UserData';
import UserLinks from '../UserLinks/UserLinks';

const UserInfo: FC = () => {
  const { user } = userStore();

  const { error } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  return (
    <section
      className={`flex flex-col justify-center ${
        error ? 'items-center' : 'items-start'
      } w-full min-h-[445px] md:min-h-[481px] gap-5 p-4 md:p-8 mt-4 bg-white shadow-md dark:bg-dark-navy rounded-2xl`}
    >
      {error && <NoResults />}
      {!error && (
        <>
          <UserAccount />
          <UserData />
          <UserLinks />
        </>
      )}
    </section>
  );
};

export default UserInfo;
