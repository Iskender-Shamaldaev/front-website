"use client";

// import {
//   ChartBarIcon,
//   PuzzlePieceIcon,
//   CursorArrowRaysIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/solid";
import {ResumeItem} from "@/components";
import {useGetResumesQuery} from "@/services/resume.services";

export function Resume() {

  const {data, isLoading} = useGetResumesQuery();

  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">
            {data?.data[0]?.attributes?.title}
          </h2>

          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            {data?.data[0]?.attributes.description}
          </p>

          {/*<Button*/}
          {/*  variant="text"*/}
          {/*  color="gray"*/}
          {/*  className="flex items-center gap-2"*/}
          {/*>*/}
          {/*  посмотреть больше*/}
          {/*  <ArrowRightIcon*/}
          {/*    strokeWidth={3}*/}
          {/*    className="h-3.5 w-3.5 text-gray-900"*/}
          {/*  />*/}
          {/*</Button>*/}
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {isLoading === false &&
            data.data[0].attributes.resume_items.data.map((item: any, index: any) => (
              <ResumeItem key={index}
                          child
                            ={item.attributes.children}
                          imgSrc={`${item.attributes.icon.data.attributes.url}`}
                          imgAlt="Icon"/>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
