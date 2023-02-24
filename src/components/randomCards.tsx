import React, { useEffect, useState } from "react";
import Card from "./card";

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  return rand + min;
}

type Props = {
  signs: any[];
};

export default function RandomCards({ signs }: Props) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const setRandom = () => {
    setShow(false);
    setIndex(generateRandom(0, signs.length ? signs.length - 1 : 0));
  };

  useEffect(() => {
    setRandom();
  }, []);

  return (
    <div className="h-full w-full">
      <Card sign={signs[index]} reveal={show} />

      <div className="flex w-full justify-center xs:mt-2 sm:mt-6">
        {!show && (
          <button
            className="btn btn-primary dark:bg-blue-800"
            onClick={() => setShow(true)}
          >
            Peržiūrėti
          </button>
        )}

        {show && (
          <button
            className="btn btn-primary dark:bg-blue-800"
            onClick={setRandom}
          >
            Atsitiktinis
          </button>
        )}
      </div>
    </div>
  );
}
