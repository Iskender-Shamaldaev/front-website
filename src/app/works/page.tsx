"use client"
import {useState} from 'react';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Описание проекта 1',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Описание проекта 2',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Описание проекта 3',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Функция для обработки нажатия на карточку
  const handleCardClick = (projectId: number) => {
    // Переход на страницу проекта по id
    console.log(`Переход к проекту с id: ${projectId}`);
  };


  return (
    <section className="px-8">
      <h3 className="mx-auto text-center w-full text-blue-gray-700 lg:w-10/12 mt-10">
        Наши проекты
      </h3>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`p-4 cursor-pointer ${selectedProject === project.id ? 'shadow' : ''}`}
            onClick={() => handleCardClick(project.id)}
            onMouseEnter={() => setSelectedProject(project.id)}
            onMouseLeave={() => setSelectedProject(null)}
          >
            <div className="relative h-60">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4">
               <span className="text-blue-gray font-bold mb-2">
                {project.title}
               </span>
              <p className="text-blue-gray">
                {project.description}
              </p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}
