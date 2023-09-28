// import emailjs from "@emailjs/browser";
import React from "react";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

export default function Form({
  onClose,
  styleModal,
}: {
  styleModal?: { form?: string; field?: string };
  onClose?: () => void;
}) {
  //Дефолтные состояний полей и кнопки
  const [valueButton, setValueButton] = useState("Отправить");
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    message: "",
    phone: "",
    theme: "",
  });

  const handleChange = (event: { target: { id: string; value: string } }) => {
    setFormValue(prev => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  // Отправка формы с изменением значения кнопки для котнорля процесса отправки и сбор значений полей до пустых строк
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue);
    setValueButton(() => "Отправляем...");
    // const result = await emailjs.send(
    //   "service_wsvipms",
    //   "template_v53rzof",
    //   formValue,
    //   "OKeuphUtCfw-T8IkP"
    // );
    // if (result.status === 200) {
    //   setValueButton("Доставлено!");
    //   setFormValue(prev => {
    //     return {
    //       ...prev,
    //       username: "",
    //       email: "",
    //       message: "",
    //       phone: "",
    //       theme: "",
    //     };
    //   });
    //Эмулятор отправки письма
    setTimeout(() => setValueButton("Отправить"), 2000);
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 4000);
  };
  //стили при рендере на десктопе
  //StyleModal это стили для мобильных устройств - передаются пропсом
  const defaultStyle = {
    form: "pt-10 lg:px-28 w-full h-full space-y-8",
    field: "space-y-4 sm:space-y-0 sm:grid gap-10 grid-cols-2 grid-rows-2",
  };

  return (
    <form
      onClick={e => e.stopPropagation()}
      className={styleModal?.form ? styleModal.form : defaultStyle.form}
      onSubmit={handleSubmit}
    >
      <div
        className={styleModal?.field ? styleModal.field : defaultStyle.field}
      >
        <div className="flex flex-col gap-3">
          <label className="font-primary text-md" htmlFor="user">
            Имя
          </label>
          <input
            placeholder="Как к вам обращаться"
            className=" outline-[#148B8A] px-3 bg-blue-gray-100 h-10 rounded-md"
            type="text"
            id="username"
            value={formValue.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-primary text-md" htmlFor="phone">
            Номер телефона
          </label>
          <PatternFormat
            placeholder="+7 (___) ___-____"
            className=" outline-[#148B8A] px-3 bg-blue-gray-100 h-10 rounded-md"
            type="tel"
            format="+7 (###) ###-####"
            mask="_"
            id="phone"
            value={formValue.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-primary text-md" htmlFor="email">
            Email
          </label>
          <input
            placeholder="tovesta-k@yandex.ru"
            type="text"
            id="email"
            className=" outline-[#148B8A] px-3 bg-blue-gray-100 h-10 rounded-md"
            required
            value={formValue.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-primary text-md" htmlFor="theme">
            Тема сообщения
          </label>
          <input
            placeholder="Например, 'Оформление электронной подписи'"
            className=" outline-[#148B8A] px-3 bg-blue-gray-100 h-10 rounded-md"
            type="text"
            id="theme"
            required
            value={formValue.theme}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <label className="font-primary text-md" htmlFor="message">
          Сообщение
        </label>
        <textarea
          className="sm:h-52 outline-[#148B8A] px-3 py-2 bg-blue-gray-100 rounded-md"
          id="message"
          value={formValue.message}
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex flex-row gap-x-5 justify-center text-center">
        {onClose ? (
          <button
            onClick={onClose}
            className="w-44 h-10 font-primary font-normal text-white bg-[#148B8A] rounded-md transition duration-200 hover:shadow-[0px_0px_10px_0px_#148B8A]"
          >
            Отмена
          </button>
        ) : (
          <></>
        )}
        <button
          className="w-44 h-10 font-primary font-normal text-white bg-[#148B8A] rounded-md transition duration-200 hover:shadow-[0px_0px_10px_0px_#148B8A]"
          type="submit"
        >
          {valueButton}
        </button>
      </div>
    </form>
  );
}
