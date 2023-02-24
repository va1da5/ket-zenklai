import React from "react";

export default function container(props: any) {
  return (
    <div className="flex h-full w-full">
      <div
        className={`relative h-full w-1/4 rounded-lg dark:bg-gray-800 xs:w-full sm:m-auto
        sm:h-[calc(100%-100px)] sm:w-[600px]  sm:bg-white sm:shadow-lg sm:dark:bg-gray-800 ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
