import { Typography } from "@material-tailwind/react";

export default function First() {
  return (
    <Typography as="div">
      <Typography as={"p"} className="font-primary font-light">
        Данная услуга подразумевает предоставление клиенту на долгосрочной
        основе полного перечня наших возможностей по участию в закупке — от
        поиска торгов, подготовки заявки на участие, до подписания успешно
        выигранного контракта с заказчиком. <br />
        <br /> Полное тендерное сопровождение подойдет для тех, кто не готов
        содержать целый тендерный отдел или специалиста по тендерам в штате
        организации.
        <br /> <br />
        Наша команда оперативно и качественно поможет на любом этапе закупки.
        Квалификация наших экспертов гарантирует корректность заполненных
        документов. Вам не потребуется тратить время на отслеживание каждого
        этапа процедуры. Вы будете только принимать решение по участию в закупке
        и оценивать полученный результат.
        <br /> <br />
        <Typography
          as="h3"
          className="font-bold font-primary text-[#148B8A] text-lg"
        >
          Что включает в себя услуга по комплексному тендерному сопровождению
          компаний?
        </Typography>
        <br />
      </Typography>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Проведение аналитики, подбор заявок
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Поиск контрактов по вашим критериям вручную
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Анализ конкурентоспособности
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Подбор заявок без конкурентов
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Подборка тендеров, соответствующих вашим возможностям
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Рекомендации по выбору заказчика
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Оформление электронной подписи
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Выбор подходящей электронной подписи{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Сбор пакета документов
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Обучение использования электронной подписи{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Настройка программного обеспечения для участия в электронных торгах{" "}
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Регистрация в ЕРУЗ
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Регистрация в ЕРУЗ (в т.ч. на 8 федеральных электронных площадках) на
          портале ЕИС
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Аккредитация на ЭТП для участия в тендере{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Экспертиза документов для аккредитации{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Консультация по вопросам открытия спецсчета{" "}
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Банковские продукты
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Открытие спецсчета
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Оформление банковских гарантий и тендерных займов{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Одобрение в кратчайшие сроки с минимальным пакетом документов{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Согласование макета банковских гарантий напрямую и с заказчиком{" "}
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Привлечение банков-партнеров по минимальной процентной ставке
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Анализ заказчика и заказа
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Проверка платежеспособности заказчика
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Наличие коррупционной составляющей
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Анализ процента понижения в тендере
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Подача запросов разъяснений
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Подача жалобы в ФАС при необходимости
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Анализ конкурентов
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Анализ емкости рынка и конкуренции по направлению в регионе
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Опыт выполненных работ
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Финансовые возможности
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Наличие лицензий, сертификатов и допусков (СРО, ИСО, Минкульт, МЧС)
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Наличие кадровых ресурсов
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Подготовка и подача заявки
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Анализ выгодности участия в закупке, просчет маржинальности тендера
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Оформление необходимого комплекта документов для участия в
          конкурентных и неконкурентных способах закупки согласно 44-ФЗ, 223-ФЗ,
          а также в коммерческих тендерах
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Заполнение всех форм в составе заявки
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Подготовка документов, подтверждающих соответствие участников закупки
          указанным дополнительным требованиям
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Предоставление аналитической информации по снижению ценовых
          предложений с учетом специфики закупки
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start gap-2">
        <svg
          className="w-6 h-6 basis-1/12 sm:basis-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
            stroke="#148B8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography as={"h3"} className="font-primary font-light text-lg">
          Заключение контракта с заказчиком, оформление (при необходимости)
          протоколов разногласий{" "}
        </Typography>
      </div>
    </Typography>
  );
}
