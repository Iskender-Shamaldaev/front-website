'use client'
import React from "react";
import TestimonialCard from "@/components/testimonial-card";
import {useGetTestimonialsQuery} from "@/services/testimonial.services";

export function Testimonial() {

  const {data, isLoading} = useGetTestimonialsQuery();

  const testimonials = data?.data[0]?.attributes.testimonial_cards.data;

  const [activeCommentator, setActiveCommentator] = React.useState(
    testimonials && testimonials.length > 0 ? testimonials[0]?.attributes : {}
  );

  React.useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setActiveCommentator(testimonials[0]?.attributes);
    }
  }, [testimonials]);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            {data?.data[0]?.attributes.title}
          </h2>

          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            {data?.data[0]?.attributes.description}
          </p>

        </div>
        <div className="py-8 lg:flex-row shadow-none">
          <div className="w-full lg:gap-10 h-full lg:flex justify-between">
            <div className="w-full mb-10 lg:mb-0">
              <h3 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold lg:max-w-xs">
                {data?.data[0]?.attributes.cardTitle}
              </h3>
              <p className="mb-3 w-full lg:w-8/12 text-gray-500 font-normal">
                {activeCommentator.comment}
              </p>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
                {activeCommentator.name} - {activeCommentator.position}
              </h6>
              <p className="font-normal mb-5 text-gray-500">
                {activeCommentator.company}
              </p>

              <div className="flex items-center gap-4">
                {isLoading === false && testimonials?.map((testimonial: any) => (
                  <TestimonialCard
                    key={testimonial.id}
                    author={testimonial.attributes}
                    isActive={activeCommentator === testimonial.attributes}
                    onClick={() => setActiveCommentator(testimonial.attributes)}
                    imgSrc={`${testimonial.attributes.avatar.data.attributes.url}`}
                    imgAlt="Image"
                  />
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={768}
                height={768}
                alt="testimonial image"
                src={`${activeCommentator?.avatar?.data?.attributes?.url}`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
