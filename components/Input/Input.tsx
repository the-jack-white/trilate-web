"use client";

import { ChangeEvent, useState } from "react";

type InputProps = {
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
  reference?: any;
  callback?: (value: string, key: string) => void;
};

const Input = ({
  placeholder,
  name,
  type,
  reference,
  callback,
}: InputProps) => {
  const [showLabel, setShowLabel] = useState<boolean>(false);

  const callbackEventWatcher = (event: any) => {
    const targetValue = event.target.value;

    if (targetValue) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }

    callback && callback(targetValue, name);
  };

  return (
    <div className="flex items-center gap-2 w-full relative mb-4">
      {showLabel && (
        <label className="absolute bottom-10 text-xs left-2 bg-slate-200 px-1 dark:bg-slate-600">
          {placeholder}
        </label>
      )}
      <input
        className="no-scrollbar resize-none w-full h-12 p-3 text-base text-slate-600 placeholder-slate-500 border rounded-lg focus:shadow-outline"
        placeholder={placeholder}
        type={type}
        name={name}
        ref={reference}
        onChange={(e) => callbackEventWatcher(e)}
      />
    </div>
  );
};

export default Input;
