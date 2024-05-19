import React from 'react';

const TestimonialCard = ({ isActive, onClick, imgSrc, imgAlt }: any) => {
  return (
    <div className="flex items-center gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={imgAlt}
        width={36}
        height={36}
        className={`class="inline-block relative object-cover object-center w-9 h-9 rounded-md cursor-pointer opacity-50" ${isActive ? "opacity-100" : "opacity-50"}`}
        onClick={onClick}
      />
      <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
    </div>
  );
};

export default TestimonialCard;
