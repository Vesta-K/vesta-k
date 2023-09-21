import { Typography } from "@material-tailwind/react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

export default function UsWorkers() {
  return (
    <section className="rounded-xl w-full bg-white flex flex-col items-center  py-8 px-8 md:px-20">
      <Typography as="h3" className=" font-primary font-normal text-xl">
        Наши сотрудники
      </Typography>
      <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A] "></hr>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-64"
      >
        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </section>
  );
}
