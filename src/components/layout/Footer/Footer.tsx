import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const menu = [
  { path: "/vesta-k/", title: "Главная" },
  { path: "/vesta-k/services", title: "Услуги" },
  { path: "/vesta-k/about", title: "О нас" },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#292E37]">
      <div className="mx-auto h-full w-full max-w-[1290px] pt-8 flex flex-col flex-wrap lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-8 lg:gap-0 px-4 xl:px-0">
        <nav className="basis-1/3 h-full px-4">
          <Typography
            as="a"
            className="font-primary text-[#148B8A] text-center lg:text-left text-xl font-normal"
          >
            Разделы
          </Typography>
          <ul className="flex flex-col items-center lg:items-start py-5 lg:py-10 gap-5">
            {menu &&
              menu.map(({ path, title }) => (
                <li
                  key={uuidv4()}
                  className="font-primary text-white h-full flex items-start"
                >
                  <NavLink to={path} className="hover:text-[#148B8A]">
                    {title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
        <div className="basis-1/3 h-full">
          <Typography
            as="a"
            className="font-primary text-[#148B8A] text-center text-xl font-normal"
          >
            Контакты
          </Typography>
          <div className="flex flex-col items-center py-5 lg:py-10 gap-5">
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
            <Typography
              as="a"
              href="https://yandex.ru/maps/-/CDUnJN9D"
              className="font-primary text-white text-center transition duration-200 hover:text-[#148B8A]"
            >
              344006, г.Ростов-на-Дону, ул. Социалистическая 150, офис 3.
            </Typography>
          </div>
        </div>
        <div className="basis-1/3 h-full px-4">
          <Typography
            as="a"
            className="font-primary text-[#148B8A] text-center lg:text-right text-xl font-normal"
          >
            Для пользователей
          </Typography>
          <div className="flex flex-col items-center lg:items-end py-5 lg:py-10 xl:px-0 gap-5">
            <div className="flex flex-row justify-center lg:justify-end  items-center w-full gap-2">
              <Typography
                as="a"
                href="../../public/docs/politika.pdf"
                className=" text-center font-primary text-white transition duration-200 hover:text-[#148B8A]"
              >
                Политика обработки персональных данных
              </Typography>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6V2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.07989 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85317 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4801 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5747 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4801 12.6667 11.9201 12.6667 10.8V9.33333"
                  stroke="#148B8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row w-full justify-center lg:justify-end items-center gap-2">
              <Typography
                as="a"
                href="../../public/docs/usersaccept.pdf"
                className="text-right font-primary text-white transition duration-200 hover:text-[#148B8A]"
              >
                Пользовательское соглашение
              </Typography>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6V2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.07989 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85317 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4801 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5747 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4801 12.6667 11.9201 12.6667 10.8V9.33333"
                  stroke="#148B8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Typography
              as="a"
              className="font-primary text-white text-center transition duration-200 hover:text-[#148B8A]"
            >
              ОГРН: 127371371 ИНН: 1237127
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
