import axios from "axios";
export default function Form() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    const data = {
      name: target.username.value,
      email: target.email.value,
      message: target.message.value,
      phone: target.phone.value,
      theme: target.theme.value,
    };
    axios.post("/send", { ...data });
  };
  return (
    <form className="p-10 sm:px-28 w-full h-full" onSubmit={handleSubmit}>
      <div className="sm:grid gap-10 grid-cols-2 grid-rows-2">
        <div className="flex flex-col">
          <label htmlFor="user">Имя</label>
          <input
            className=" bg-blue-gray-100"
            type="text"
            id="username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Номер телефона</label>
          <input
            className=" bg-blue-gray-100"
            type="text"
            id="phone"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className=" bg-blue-gray-100"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="theme">Тема сообщения</label>
          <input
            className=" bg-blue-gray-100"
            type="text"
            id="theme"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="message">Message:</label>
        <textarea className="h-52 bg-blue-gray-100" id="message" required />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}
