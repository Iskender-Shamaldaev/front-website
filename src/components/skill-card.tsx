"use client"

interface SkillCardProps {
  title: string;
  child: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export function SkillCard({title, child, imgAlt, imgSrc}: SkillCardProps) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="p-6 grid justify-center text-center">
        <div
          className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={imgAlt}
            width={768}
            height={768}
            className="h-8 w-8"
          />
        </div>
        <h5
          className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          {title}
        </h5>
        <p
          className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
          {child}
        </p>
      </div>
    </div>

  )
    ;
}

export default SkillCard;
