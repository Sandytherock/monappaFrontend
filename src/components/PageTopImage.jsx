export function PageTopImage({ imageUrl, text}) {

    const classProp = `h-[19rem] max-lg:h-[17rem] max-md:h-[10rem] w-full`;
  return (
    <div className="w-full relative flex justify-center ">
      <img
        src={imageUrl}
        alt=""
        className={`h-[19rem] max-lg:h-[17rem] max-md:h-[10rem] w-full`}
      />
      <div className="absolute bottom-0 w-full max-w-[76rem]">
        <span className="absolute bottom-6 left-2 text-white bg-black/50 text-4xl max-lg:text-4xl max-sm:text-2xl px-1 py-1">
          {text}
        </span>
      </div>
    </div>
  );
}
