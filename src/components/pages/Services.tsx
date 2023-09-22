import { Card, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";
import ServisesCard from "../ui/ServisesCard";
import servicesContent from "../../content/servicesContent";

export default function Services() {
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value: number) => setSelected(value);
  return (
    <div className="mx-auto h-full w-full max-w-[1280px] py-10 px-4 xl:px-0 space-y-10">
      <div className="flex flex-col md:flex-row  gap-5">
        <Card className="md:w-1/4 w-full min-w-[248px] h-fit">
          <List>
            {servicesContent.map((item, index) => {
              return (
                <ListItem key={index} onClick={() => setSelectedItem(index)}>
                  {item.title}
                </ListItem>
              );
            })}
          </List>
        </Card>
        <div className="md:w-3/4 w-full bg-white rounded-xl p-3">
          <ServisesCard serviceName={selected} />
        </div>
      </div>
    </div>
  );
}
