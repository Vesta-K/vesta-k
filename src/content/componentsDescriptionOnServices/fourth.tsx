import { Typography } from "@material-tailwind/react";

export default function Fourth() {
  return (
    <Typography as="div">
      <Typography as={"p"} className="font-primary font-light">
        В случае обнаружения в документации о закупке излишних требований к
        участникам закупок, нарушений правила описания объекта закупки и любых
        других нарушений, оперативно и с соблюдением всех сроков подготовим и
        подадим в ФАС жалобу на неправомерные действия заказчика. Представляем
        интересы Вашей компании при рассмотрении поданной жалобы на заседании в
        ФАС.
        <br />
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
          Как оспорить решения ФАС:
        </Typography>
      </div>
      <ul className="w-full px-4 py-4">
        <li className="list-image-checkmark list-inside font-primary">
          Проводим бесплатный анализ ситуации и перспективы дела
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Юристы собирают все необходимые сведения по компаниям, документацию от
          заказчика контракта и иные материалы
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Готовим активную правовую защиту и подбираем соответствующую судебную
          практику.
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Сопровождение и защита интересов на заседаниях в антимонопольных
          органах
        </li>
        <li className="list-image-checkmark list-inside font-primary">
          Оспариваем действия Заказчика и ФАС в суде.
        </li>
      </ul>
    </Typography>
  );
}
