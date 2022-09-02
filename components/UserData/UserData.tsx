import React from 'react';

const UserData = () => {
  return (
    <div className="flex items-center w-full justify-evenly bg-white-one dark:bg-darker-navy min-h-[85px] rounded-xl">
      <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center">
        <p className="text-xs text-light-navy dark:text-white">Repos</p>
        <h4 className="text-base font-bold text-dark-grey dark:text-white">
          8
        </h4>
      </div>
      <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center">
        <p className="text-xs text-light-navy dark:text-white">Followers</p>
        <h4 className="text-base font-bold text-dark-grey dark:text-white">
          3938
        </h4>
      </div>
      <div className="font-SpaceMono min-w-[79px] flex flex-col justify-center items-center">
        <p className="text-xs text-light-navy dark:text-white">Following</p>
        <h4 className="text-base font-bold text-dark-grey dark:text-white">
          9
        </h4>
      </div>
    </div>
  );
};

export default UserData;
