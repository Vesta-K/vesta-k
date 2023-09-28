import { Typography } from "@material-tailwind/react";
import CardWorker from "../../../ui/cardWorker";
import { v4 as uuidv4 } from "uuid";
import workersContent from "../../../../content/workersContent";
export default function UsWorkers() {
  return (
    <section className="rounded-xl w-full bg-white flex flex-col items-center py-8 px-8 md:px-20">
      <Typography as="h3" className=" font-primary font-normal text-xl">
        Наши сотрудники
      </Typography>
      <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A] "></hr>
      <div className="flex flex-row justify-center items-center gap-10 flex-wrap w-full">
        {workersContent.map(({ img, title, description }) => (
          <CardWorker
            key={uuidv4()}
            img={img}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
