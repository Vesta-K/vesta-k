import { Typography } from "@material-tailwind/react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function About() {
  return (
    <section className="mx-auto h-full w-full max-w-[1280px] py-10 px-4 2xl:px-0 space-y-10">
      <div className="w-full flex flex-row flex-wrap justify-center gap-y-10 gap-x-10 xl:justify-between items-center">
        <div className="sm:w-1/4 w-full min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
        <div className="sm:w-1/4 w-full min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
        <div className="sm:w-1/4 w-full min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
      </div>
      <div className="w-full h-fit bg-white rounded-xl py-8 px-8 md:px-20">
        <Typography
          as="h3"
          className="w-full text-center font-primary font-normal text-xl"
        >
          Прайс-лист
        </Typography>
        <div className="w-full flex justify-center">
          <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A]"></hr>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <div>
            <img></img>
            <Typography>Времени работ</Typography>
          </div>
          <div>
            <img></img>
            <Typography>Выявленных задач</Typography>
          </div>
          <div>
            <img></img>
            <Typography>Количества участников</Typography>
          </div>
          <div>
            <img></img>
            <Typography>Формата проведения</Typography>
          </div>
          <div>
            <img></img>
            <Typography>Объема сопровождения</Typography>
          </div>
        </div>
      </div>
      <div className="w-full py-8 px-8 md:px-20 h-96 bg-white rounded-xl">
        <Typography
          as="h3"
          className="w-full text-center font-primary font-normal text-xl"
        >
          Обратная связь
        </Typography>
        <div className="w-full flex justify-center">
          <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A]"></hr>
        </div>
        <Typography className="w-full text-center font-primary font-light text-md">
          Если у Вас есть вопросы или предложения вы можете отправить в форме
          обратной связи
        </Typography>
        <form></form>
      </div>
      <div className="w-full py-8 px-8 md:px-20 h-fit bg-white rounded-xl">
        <Typography
          as="h3"
          className="w-full text-center font-primary font-normal text-xl"
        >
          Интерактивная карта
        </Typography>
        <div className="w-full flex justify-center">
          <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A]"></hr>
        </div>
        <YMaps query={{ apikey: "3393c833-d9af-455e-aeac-c97893c9816d" }}>
          <div className="rounded-xl overflow-clip">
            <Map
              className="w-full h-[500px]"
              defaultState={{
                center: [47.223357, 39.729763],
                zoom: 18,
              }}
            >
              <Placemark geometry={[47.223357, 39.729763]} />
            </Map>
          </div>
        </YMaps>
      </div>
    </section>
  );
}
