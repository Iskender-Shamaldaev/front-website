"use client"


export default function About() {
  return (
    <section className="px-8 mt-20">
      <div className="container mx-auto">
        <h1 className=" text-center block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
          О компании Aksoft
        </h1>

        <h3 className="text-center block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          Наша миссия — воплотить ваши самые смелые идеи в цифровую жизнь!
        </h3>

        <p className="mx-auto text-center w-full text-gray-500 lg:w-10/12 mt-8 text-xl">
          Мы - команда профессионалов, специализирующихся на разработке сайтов, веб-сервисов и приложений. Мы знаем как
          сделать ваше присутствие в интернете эффективным.

          Вдохновленные технологиями, мы создаем красивые и функциональные продукты, которые приносят результаты нашим
          клиентам.
        </p>

        <h3 className="mx-auto text-center w-full text-blue-gray-700 lg:w-10/12 mt-20 mb-8 text-xl">
          Наши преимущества:
        </h3>

        <div className="benefits text-center">
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Focus">🎯</span> Фокус на автоматизацию бизнес-процессов
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Innovation">💡</span> Инновационный подход и современные
            технологии
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Team">⚡️</span> Команда профессиональных разработчиков
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Result">💵</span> Ориентация на результат клиента
          </div>
        </div>
        <p className="mx-auto text-center w-full text-gray-500 lg:w-10/12 mt-8 text-xl">
          Мы готовы стать вашим технологическим партнером и воплотить любые идеи в жизнь - от сайтов до веб и мобильных
          приложений.
        </p>

        <h3 className="mx-auto text-center w-full text-blue-gray-700 lg:w-10/12 mt-20 text-2xl">
          Создавать - это наша страсть, это то, что делает нас живыми!
        </h3>

      </div>
    </section>
  );
}
