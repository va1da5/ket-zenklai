import React from "react";

type Props = {
  sign: any;
  reveal: boolean;
};

export default function Card({ sign, reveal }: Props) {
  return (
    <div className="flex flex-col items-center">
      <p
        className={`mb-1 uppercase text-gray-500 dark:text-gray-300 sm:text-sm md:text-xl ${
          reveal ? "opacity-100" : "opacity-0"
        }`}
      >
        {sign.type}
      </p>

      <div className="flex flex-col items-center sm:my-4 md:my-6">
        <img
          key={sign.example}
          src={`assets/${sign.example}`}
          alt={sign.title}
        />
        <p className="text-lg">{sign.number}</p>
      </div>

      <div
        className={`flex max-h-96 grow flex-col items-center gap-2 overflow-y-auto px-6 ${
          reveal ? "opacity-100" : "opacity-0"
        }`}
      >
        <hr className="mx-auto my-2 h-px w-3/4 rounded border-0 bg-gray-200 dark:bg-gray-700"></hr>

        <p className="mb-2  xs:text-lg md:text-2xl">{sign.title}</p>
        <p className="mb-3 sm:text-base md:text-lg">{sign.explanation}</p>

        <ul className="text-slate-600 dark:text-slate-300">
          {sign.details.map((detail: string) => (
            <li key={detail} className="mb-4">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
