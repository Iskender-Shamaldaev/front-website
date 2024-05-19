"use client"
import {SkillCard} from "@/components";
import {useGetSkillsQuery} from "@/services/skill.services";

export function Skills() {
  const {data, isLoading} = useGetSkillsQuery();

  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <p
          className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
          {data?.data[0].attributes.text}
        </p>

        <h1
          className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
          {data?.data[0].attributes.title}
        </h1>

        <p
          className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
        {data?.data[0].attributes.description}
      </p>

    </div>
  <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
    {isLoading === false &&
      data.data[0].attributes.skill_cards.data.map((card: any) => (
        <SkillCard
          key={card.id}
          title={card.attributes.title}
              child={card.attributes.description}
              imgSrc={`${card.attributes.icon.data.attributes.url}`}
              imgAlt="Image"
            />
          ))}
      </div>
    </section>
  );
}

export default Skills;
