import { Typography } from "@material-tailwind/react";

export default function CardWorker({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-[300px] h-[450px]  bg-transparent cursor-pointer group [perspective:3000px]">
      <div className="relative [transform-style:preserve-3d] transition ease-in-out group-hover:[transform:rotateY(180deg)] w-full h-full duration-[800ms]">
        <div className=" absolute rounded-xl bg-blue-gray-500 w-full h-full">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="w-full [backface-visibility:hidden] rounded-xl h-full bg-center bg-cover flex items-center justify-center"
          >
            <div className="p-10 w-full h-1/4 bg-[#292E37] opacity-80 flex items-center justify-center text-center">
              <Typography
                as="h5"
                className="font-primary font-light text-xl text-white "
              >
                {title}
              </Typography>
            </div>
          </div>
        </div>
        <div className="p-5 absolute rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#292E37] w-full h-full shadow-xl flex items-center justify-center text-center">
          <Typography as="p" className="font-primary text-white text-lg">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
