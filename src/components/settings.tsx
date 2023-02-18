import React from "react";
import { useLocalStorage } from "react-use";

type Props = {
  theme: string;
  onThemeChange: () => void;
};

export default function Settings({ theme, onThemeChange }: Props) {
  const [queuePersistance, setQueuePersistance, removeQueuePersistance] =
    useLocalStorage<string[]>("__flashcards_queue", []);

  return (
    <div className="w-full p-12">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="text-lg">Tamsi tema</span>
          <input
            type="checkbox"
            className="toggle"
            checked={theme == "dark" ? true : false}
            onChange={onThemeChange}
          />
        </label>
      </div>

      <button
        className="btn btn-error mt-10"
        onClick={() => {
          setQueuePersistance([]);
        }}
      >
        Išvalyti istoriją
      </button>
    </div>
  );
}
