import React from "react";
import { useLocalStorage } from "react-use";

export default function Settings() {
  const [queuePersistance, setQueuePersistance, removeQueuePersistance] =
    useLocalStorage<string[]>("__flashcards_queue", []);

  return (
    <div className="flex w-full flex-col justify-center p-12">
      <button
        className="btn-error btn m-10"
        onClick={() => {
          setQueuePersistance([]);
        }}
      >
        Išvalyti istoriją
      </button>
    </div>
  );
}
