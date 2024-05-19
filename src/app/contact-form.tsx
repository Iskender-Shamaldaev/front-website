"use client"
import React, {useState} from "react";
import emailjs from 'emailjs-com';
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {useGetContactsQuery} from "@/services/contact.services";

function ContactForm() {
  const {data} = useGetContactsQuery();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Параметры для отправки письма
    const params = {
      from_name: `
        Имя: ${formData.firstName}
        Фамилия: ${formData.lastName}
        Email: ${formData.email}
        Интерес: ${formData.interest}
        Сообщение: ${formData.message}
      `,
      to_email: 'aksoftkg@gmail.com',
    };

    emailjs.send(
      'service_gmail_sender',
      'template_1e8880k',
      params,
      'LLiv4-u-Z42d_ukaA'
    )
      .then((response) => {
        console.log('Письмо успешно отправлено!', response);
        setMessageSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: ""
        });

        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Ошибка отправки письма:', error);
      });
  };

  return (
    <section className="px-8 py-16 mt-20">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
          {data?.data[0]?.attributes?.mainTitle}
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full lg:w-5/12 !text-gray-500">
          {data?.data[0]?.attributes?.mainDescription}
        </p>
      </div>
      <div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
                {data?.data[0]?.attributes?.contactTitle}
              </h4>
              <p className="block antialiased font-sans font-normal text-inherit mx-auto mb-8 text-base !text-gray-500">
                {data?.data[0]?.attributes?.contactDescription}
              </p>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white"/>
                <h6 className="text-white mb-2">
                  {data?.data[0]?.attributes?.phone}
                </h6>
              </div>
              <div className="flex gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white"/>
                <h6 className="text-white mb-2">
                  {data?.data[0]?.attributes?.mail}
                </h6>
              </div>
              <div className="flex items-center gap-5">
                <button className="text-white hover:text-gray-400">
                  <i className="fa-brands fa-facebook text-lg"/>
                </button>
                <button className="text-white hover:text-gray-400">
                  <i className="fa-brands fa-instagram text-lg"/>
                </button>
                <button className="text-white hover:text-gray-400">
                  <i className="fa-brands fa-github text-lg"/>
                </button>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-8 grid gap-4 lg:grid-cols-2">
                    <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-3 md:mb-0">
                      <input
                        type="text"
                        required={true}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900"
                        placeholder="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-3 md:mb-0">
                      <input
                        type="text"
                        required={true}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900"
                        placeholder="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                    <input
                      type="email"
                      required={true}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900"
                      placeholder="Адрес электронной почты"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="block antialiased font-sans font-normal text-inherit !text-blue-gray-500 text-sm mb-5 mt-10">
                      В чем вы заинтересованы ?
                    </p>
                    <div className="-ml-3 mb-14 ">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="interest"
                          value="Design"
                          checked={formData.interest === "Design"}
                          onChange={handleChange}
                          className="form-radio text-gray-600 h-4 w-4"
                        />
                        <span className="text-gray-700 mr-3">Дизайн</span>
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="interest"
                          value="Development"
                          checked={formData.interest === "Development"}
                          onChange={handleChange}
                          className="form-radio text-gray-600 h-4 w-4"
                        />
                        <span className="text-gray-700 mr-3">Разработка</span>
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="interest"
                          value="Support"
                          checked={formData.interest === "Support"}
                          onChange={handleChange}
                          className="form-radio text-gray-600 h-4 w-4"
                        />
                        <span className="text-gray-700 mr-3">Поддержка</span>
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="interest"
                          value="Other"
                          checked={formData.interest === "Other"}
                          onChange={handleChange}
                          className="form-radio text-gray-600 h-4 w-4"
                        />
                        <span className="text-gray-700">Другое</span>
                      </label>
                    </div>
                    <p className="text-blue-gray-500 text-sm mb-2">
                      Ваше сообщение
                    </p>
                    <textarea
                      required={true}
                      className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-4 border-blue-gray-200 focus:border-gray-900 !resize-none"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {messageSent && <p>Обращение успешно отправлено!</p>}
                    <div className="w-full flex justify-end">
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full md:w-fit mt-7">
                        Отправить сообщение
                      </button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
