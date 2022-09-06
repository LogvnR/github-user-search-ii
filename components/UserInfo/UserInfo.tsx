import { FC } from 'react';
import { useGetUserQuery } from '../../graphql/generated/graphql';
import userStore from '../../helpers/userStore';
import Spinner from '../Spinner/Spinner';

import UserAccount from '../UserAccount/UserAccount';
import UserData from '../UserData/UserData';
import UserLinks from '../UserLinks/UserLinks';

const UserInfo: FC = () => {
  const { user } = userStore();

  const { loading } = useGetUserQuery({
    variables: {
      login: user,
    },
  });

  return (
    <section className="flex flex-col justify-center w-full min-h-[445px] gap-5 p-4 mt-4 bg-white shadow-md dark:bg-dark-navy rounded-2xl">
      {!loading && (
        <>
          <UserAccount />
          <UserData />
          <UserLinks />
        </>
      )}
      {loading && <Spinner />}
    </section>
  );
};

export default UserInfo;
