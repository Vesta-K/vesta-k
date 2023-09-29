import ReactDOM from "react-dom";
import Form from "./form";
import { Typography } from "@material-tailwind/react";

export default function ModalForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="bg-gray-500 bg-opacity-70 fixed z-50
       top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div className="w-full mx-5 sm:mx-auto sm:w-fit h-fit bg-white rounded-xl overflow-clip">
        <figure className="w-full bg-[#148B8A] h-12 sm:h-16 p-5 flex justify-start gap-x-5 items-center">
          <svg
            viewBox="0 0 20 19"
            fill="none"
            className="w-5 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1C11 1 13.2 1.2 16 4C18.8 6.8 19 9 19 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11 5C11 5 11.9334 5.26667 13.3333 6.66667C14.7333 8.06667 15 9 15 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6.66025 4.23391L7.26869 5.32416C7.81778 6.30805 7.59737 7.59875 6.73253 8.46358C6.73253 8.46358 5.68364 9.51264 7.58547 11.4146C9.48672 13.3158 10.5364 12.2675 10.5364 12.2675C11.4013 11.4026 12.6919 11.1822 13.6758 11.7313L14.7661 12.3398C16.2518 13.1689 16.4272 15.2524 15.1214 16.5583C14.3367 17.343 13.3754 17.9536 12.3127 17.9938C10.5239 18.0617 7.4859 17.609 4.43847 14.5616C1.39106 11.5141 0.938324 8.47616 1.00614 6.68728C1.04643 5.62463 1.657 4.66334 2.4417 3.87866C3.74759 2.57276 5.8311 2.74822 6.66025 4.23391Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <Typography className="font-primary text-white flex text-base">
            ЗАКАЗАТЬ ЗВОНОК
          </Typography>
        </figure>
        <Form styleModal={{ form: "p-5 space-y-5" }} onClose={onClose} />
      </div>
    </div>,
    document.body
  );
}
