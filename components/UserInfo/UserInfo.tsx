import { FC } from 'react';

import UserAccount from '../UserAccount/UserAccount';
import UserData from '../UserData/UserData';
import UserLinks from '../UserLinks/UserLinks';

const UserInfo: FC = () => {
  return (
    <section className="flex flex-col w-full gap-5 p-4 mt-4 bg-white shadow-md dark:bg-dark-navy rounded-2xl">
      <UserAccount />
      <UserData />
      <UserLinks />
    </section>
  );
};

export default UserInfo;