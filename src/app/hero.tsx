'use client'
import React, {useState} from "react";
import emailjs from 'emailjs-com';
import {useGetHeroesQuery} from "@/services/hero.services";

function Hero() {
  const {data, isLoading} = useGetHeroesQuery();
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleContact = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    const params = {
      from_name: `Пользователь ${email}`,
      to_email: 'aksoftkg@gmail.com',
    };


    emailjs.send(
      'service_gmail_sender',
      'template_1e8880k',
      params,
      'LLiv4-u-Z42d_ukaA',
    )
      .then((response) => {
        console.log('Письмо успешно отправлено!', response);
        setMessageSent(true);
        setEmail('');

        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Ошибка отправки письма:', error);
      });
  };

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1
            className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            {data?.data[0]?.attributes?.title} <br/>
          </h1>

          <p
            className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            {data?.data[0]?.attributes?.description}
          </p>

          <div className="grid">
            <p className="block antialiased font-sans text-sm leading-normal mb-2 text-gray-900 font-medium">
              Ваш адрес электронной почты
            </p>

            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <input
                type="email"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                placeholder="Введите адрес электронной почты"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]"
                onClick={handleContact}
              >
                обратиться
              </button>

            </div>
          </div>
          {messageSent && <p>Обращение успешно отправлено!</p>}
        </div>
        {!isLoading && data?.data[0]?.attributes?.image?.data?.attributes?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width={640}
            height={640}
            alt="team work"
            src={`${data?.data[0]?.attributes?.image?.data?.attributes?.url}`}
            className="rounded-xl object-cover w-full h-full"
          />
        )}
      </div>
    </header>
  );
}

export default Hero;
