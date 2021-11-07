import * as React from "react";
import {useState} from "react";
import InputInterface from '../InputInterface';

export function Input(props: InputInterface) {
  const [inputString, setInput] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setInput(this.inputString)
    event.preventDefault();
    setInput(event.currentTarget.value);
    //alert(event.target.value);

  }
  return (
      <form>
        <label>
          String Input
          <input
            type="text"
            value={inputString}
            onChange={handleChange}
          />
        </label>
      </form>

  );
}
