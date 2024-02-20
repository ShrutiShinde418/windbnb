import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const subtractHandler = () => {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  };
  const addHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="flex mt-3">
      <Button
        type="button"
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={subtractHandler}
      >
        <span className="material-symbols-outlined counter text-gray4 text-base">
          remove
        </span>
      </Button>
      <Input
        type="number"
        defaultValue={counter}
        value={counter}
        name="counter"
        min="0"
        className="text-center appearance-none m-0 w-14"
      />
      <Button
        type="button"
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={addHandler}
      >
        <span className="material-symbols-outlined counter text-gray4 text-base">
          add
        </span>
      </Button>
    </div>
  );
};

export default Counter;
