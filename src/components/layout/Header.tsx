import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const menu = [
  { path: "/vesta-k/", title: "Главная" },
  { path: "/vesta-k/services", title: "Услуги" },
  { path: "/vesta-k/about", title: "О нас" },
];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const contacts = (
    <div className="flex flex-col p-5 gap-5 lg:flex-row lg:gap-10 items-center">
      <Typography
        as="a"
        href="tel:89281831222"
        className="font-primary text-white transition duration-200 hover:text-[#148B8A]"
      >
        8 928 183 1222
      </Typography>
      <Typography
        as="a"
        href="mailto:tovesta-k@yandex.ru"
        className="font-primary text-white transition duration-200 hover:text-[#148B8A]"
      >
        tovesta-k@yandex.ru
      </Typography>
      <button className="w-44 h-10 font-primary font-normal text-white bg-[#148B8A] rounded-md transition duration-200 hover:shadow-[0px_0px_10px_0px_#148B8A]">
        Заказать звонок
      </button>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-fit">
      <header className="h-20 bg-[#292E37] ">
        <div className="mx-auto h-full w-full max-w-[1290px] py-4 flex flex-row justify-between items-center px-4 xl:px-0">
          <img src="./images/logo.svg" />
          <div className="hidden lg:block">{contacts}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-[#148B8A]"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-[#148B8A]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse
          open={openNav}
          className="absolute isolate z-50 h-fit flex flex-col items-center bg-[#292E37] shadow-2xl"
        >
          {contacts}
        </Collapse>
      </header>
      <nav className="h-14 rounded-none border-none bg-white">
        <ul className="mx-auto h-full w-full max-w-[1290px] flex flex-row px-4 xl:px-0 gap-10">
          {menu &&
            menu.map(({ path, title }) => (
              <li
                key={uuidv4()}
                className="font-primary h-full w-16 flex items-center justify-center hover:text-[#148B8A]"
              >
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "border-b-4 border-[#148B8A] h-full w-full flex justify-center items-center"
                      : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
