import { Typography } from "@material-tailwind/react";
import servicesContent from "../../content/servicesContent";
export default function ServicesCard({ serviceName }: { serviceName: number }) {
  const { title, description } = servicesContent[serviceName];
  return (
    <div>
      <Typography
        as="h3"
        className="font-primary font-bold text-[#148B8A] text-xl my-4"
      >
        {title}
      </Typography>
      <hr className="border-2 w-1/4 md:w-1/12 max-w-[76px] mt-1 mb-5 md:mb-10 border-[#148B8A] "></hr>
      <div>{description}</div>
    </div>
  );
}
