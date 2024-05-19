"use client"
import {ProjectCard} from "@/components";
import {useGetCardsQuery} from "@/services/project.services";

export function Projects() {

  const {data, isLoading} = useGetCardsQuery();

  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2
          className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          {data?.data[0]?.attributes?.title}
        </h2>
        <p
          className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
        {data?.data[0]?.attributes?.description}
      </p>

    </div>
  <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
    {isLoading === false && data.data.map((project: any) =>
      project.attributes.cards.data.map((card: any) => (
        <ProjectCard
          key={card.id}
              title={card.attributes.title}
              shortDescription={card.attributes.shortDescription}
              // description={card.attributes.description[0].children[0].text}
              imgSrc={`${card.attributes.image.data.attributes.url}`}
              imgAlt="Image"
            />
          )))}
      </div>
    </section>
  );
}

export default Projects;
