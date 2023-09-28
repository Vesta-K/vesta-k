import { Card, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ServisesCard from "../ui/ServisesCard";
import servicesContent from "../../content/servicesContent";
import MiniFormForServices from "../ui/miniFormForServices";

export default function Services() {
  const [selected, setSelected] = useState(0);
  const setSelectedItem = (value: number) => setSelected(value);

  const [replaceForm, setReplaceForm] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 720) {
        setReplaceForm(true);
      } else {
        setReplaceForm(false);
      }
    });
  }, []);

  return (
    <div className="mx-auto h-full w-full max-w-[1280px] py-10 px-4 xl:px-0 space-y-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="basis-1/4 flex flex-col gap-5">
          <Card className=" w-full min-w-[248px] h-fit">
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
          {replaceForm ? null : (
            <MiniFormForServices className="shadow-md h-fit bg-white rounded-xl overflow-clip"></MiniFormForServices>
          )}
        </div>
        <div className="shadow-md md:w-3/4 w-full bg-white rounded-xl py-3 px-5 ">
          <ServisesCard serviceName={selected} />
        </div>
        {replaceForm ? (
          <MiniFormForServices className="shadow-md h-fit bg-white rounded-xl overflow-clip"></MiniFormForServices>
        ) : null}
      </div>
    </div>
  );
}
