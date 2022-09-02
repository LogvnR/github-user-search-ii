import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsLink45Deg, BsTwitter, BsBuilding } from 'react-icons/bs';

const UserLinks = () => {
  return (
    <div className="min-h-[127px] flex flex-col gap-2">
      <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
        <MdLocationPin size={22} />
        <p className="text-xs">San Francisco</p>
      </div>
      <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
        <BsLink45Deg size={22} />
        <p className="text-xs">https://github.blog</p>
      </div>
      <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
        <BsTwitter size={22} />
        <p className="text-xs">Not Available</p>
      </div>
      <div className="flex items-center gap-3 font-SpaceMono text-light-navy dark:text-white">
        <BsBuilding size={22} />
        <p className="text-xs">@github</p>
      </div>
    </div>
  );
};

export default UserLinks;
