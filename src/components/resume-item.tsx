import Image from "next/image";
import React from "react";

interface ResumeItemProps {
  child: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export function ResumeItem({child, imgAlt, imgSrc}: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
        <Image
          className="h-6 w-6"
          src={imgSrc}
          alt={imgAlt}
          width={512}
          height={512}
        />
      </div>
      <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
        {child}
      </p>
    </div>
  );
}

export default ResumeItem;
