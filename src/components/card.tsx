import React from "react";

type Props = {
  sign: any;
  reveal: boolean;
};

export default function Card({ sign, reveal }: Props) {
  return (
    <div className=" flex flex-col overflow-y-auto dark:text-gray-300 xs:h-[calc(100%-150px)] sm:h-[calc(100%-80px)]">
      <p
        className={`light: mb-1 text-center uppercase sm:text-sm md:text-xl ${
          reveal ? "opacity-100" : "opacity-0"
        }`}
      >
        {sign.type}
      </p>

      <div className="flex h-[120px] flex-col items-center xs:my-4 md:my-6">
        <img
          key={sign.example}
          src={`assets/${sign.example}`}
          alt={sign.title}
          className="max-h-[calc(100%-20px)]"
        />
        <p className="text-lg">{sign.number}</p>
      </div>

      <div
        className={`h-full w-full gap-2 px-6 ${
          reveal ? "opacity-100" : "opacity-0"
        }`}
      >
        <hr className="mx-auto my-2 h-px w-3/4 rounded border-0 bg-gray-200 dark:bg-gray-700"></hr>

        <p className="mb-2 text-center xs:text-lg md:text-2xl">{sign.title}</p>
        <p className="mb-3 text-justify sm:text-base md:text-lg">
          {sign.explanation}
        </p>

        <ul className="max-h-[calc(100%-150px)]">
          {sign.details.map((detail: string) => (
            <li key={detail} className="mb-4 text-justify">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
