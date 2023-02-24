import React from "react";

import {
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineAdjustments,
} from "react-icons/hi";

const buttons = [
  { name: "flashcards", icon: <HiOutlineAcademicCap className="h-7 w-7" /> },
  { name: "random", icon: <HiOutlineLightningBolt className="h-7 w-7" /> },
  { name: "settings", icon: <HiOutlineAdjustments className="h-7 w-7" /> },
];

type Props = {
  onChange: (name: string) => void;
  current: string;
};

export default function BottomNav({ onChange, current }: Props) {
  return (
    <div className="btm-nav  xs:fixed sm:absolute ">
      {buttons.map((button) => (
        <button
          key={button.name}
          className={`dark:bg-gray-800 dark:text-gray-400 ${
            current == button.name ? "active" : ""
          }`}
          onClick={() => onChange(button.name)}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
}
