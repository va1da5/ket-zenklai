import React from "react";

export default function container(props: any) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={`relative xs:w-full xs:dark:bg-gray-900  sm:w-3/4 md:my-20 md:w-2/4 md:bg-white md:shadow-lg md:dark:bg-gray-900 xl:w-1/4 ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
