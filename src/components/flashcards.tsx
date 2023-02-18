import React, { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import Card from "./card";

type Props = {
  signs: any;
};

export default function Flashcards({ signs }: Props) {
  const [show, setShow] = useState(false);
  const [queue, setQueue] = useState<Date[]>([]);
  const [index, setIndex] = useState(0);
  const [queuePersistance, setQueuePersistance, removeQueuePersistance] =
    useLocalStorage<Date[]>("__flashcards_queue", []);

  useEffect(() => {
    if (queuePersistance?.length) {
      setQueue(queuePersistance.map((date) => new Date(date)));
      updateIndex();
      return;
    }

    const now = new Date();
    setQueue(Array(signs.length).fill(now));
  }, []);

  const getDate = (milliseconds: number) => {
    const date = new Date();
    date.setTime(date.getTime() + milliseconds);
    return date;
  };

  const updateIndex = () => {
    const now = new Date();

    setQueue((current: any) => {
      for (let idx = 0; idx < current.length; idx++) {
        if (now.getTime() > current[idx].getTime()) {
          setIndex(idx);
          return current;
        }
      }
    });
  };

  const handleFeedback = (index: number, interval: string) => {
    const options: { [key: string]: number } = {
      "1m": 1 * 60 * 1000,
      "6m": 1 * 60 * 1000,
      "10m": 1 * 60 * 1000,
      "4d": 4 * 24 * 60 * 60 * 1000,
    };

    const date = getDate(options[interval]);

    setQueue((current) => {
      return current.map((item, idx) => (idx == index ? date : item));
    });

    setShow(false);

    updateIndex();

    setQueue((current) => {
      setQueuePersistance(current);
      return current;
    });
  };

  const buttons = [
    {
      title: "Pakartoti",
      value: "1m",
    },
    {
      title: "Sudėtinga",
      value: "6m",
    },
    {
      title: "Teisingai",
      value: "10m",
    },
    {
      title: "Išmokau",
      value: "4d",
    },
  ];

  return (
    <>
      <Card sign={signs[index]} reveal={show} />

      <div className="flex items-center pb-10">
        {!show && (
          <button
            className="btn btn-primary mt-2 dark:bg-blue-800"
            onClick={() => setShow(true)}
          >
            Peržiūrėti
          </button>
        )}

        {show && (
          <div className="btn-group mt-4">
            {buttons.map((button) => (
              <button
                key={button.value}
                className="btn btn-primary relative xs:btn-sm md:btn-md dark:bg-blue-800"
                onClick={() => {
                  handleFeedback(index, button.value);
                }}
              >
                <span className="absolute -top-5 lowercase text-gray-700 dark:text-gray-500 ">
                  &lt;{button.value}
                </span>
                {button.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
