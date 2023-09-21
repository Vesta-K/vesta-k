import { Carousel, Typography } from "@material-tailwind/react";
import sliderContent from "../../../content/sliderContent";
import { v4 as uuidv4 } from "uuid";
export default function Hero() {
  return (
    <Carousel className="rounded-xl ">
      {sliderContent.map(({ img, title, description }) => (
        <div
          key={uuidv4()}
          style={{ backgroundImage: `url('${img}')` }}
          className="w-full h-[450px] bg-cover bg-center"
        >
          <div className="w-full h-full bg-[#292E37] bg-opacity-80">
            <div className="h-full flex flex-col justify-start gap-10 pt-4 pb-10 px-12 md:py-14 lg:px-20">
              <Typography
                as={"h1"}
                className="font-primary font-bold basis-2/3 text-center text-base sm:text-2xl md:text-2xl md:text-left lg:text-4xl text-white"
              >
                {title}
              </Typography>
              <hr className="hidden sm:block w-1/2 lg:w-5/12 border-2 border-[#148B8A]"></hr>
              <ul className="w-full basis-1/3 space-y-2">
                {description.map(item => (
                  <li
                    key={uuidv4()}
                    className="flex flex-row items-center gap-x-2"
                  >
                    <svg
                      className="w-5 h-5 basis-1/12 sm:basis-auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                        stroke="#148B8A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Typography className="basis-11/12 sm:basis-auto tracking-wide font-primary font-light text-[11px] sm:text-sm md:text-base lg:text-lg text-white">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
