import Image from 'next/image';

const NoResults = () => {
  return (
    <>
      <div className="relative w-[250px] h-[350px]">
        <Image
          src="/undraw_void_-3-ggu.svg"
          layout="fill"
          objectFit="contain"
          alt="No User Found"
        />
      </div>
      <p className="font-semibold text-git-blue font-SpaceMono">
        Sorry, User Not Found...
      </p>
    </>
  );
};

export default NoResults;
