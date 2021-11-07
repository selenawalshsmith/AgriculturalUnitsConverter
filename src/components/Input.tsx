import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";

export function Input(props: InputInterface) {
  //const [inputString, setInputString] = useState<string>();
  //const {inputString, setInputString } = useContext(AppContext)
  const {productContext, unitContext, inputStringContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;
  return (
      <form>
        <label>
          String Input
          <input
            type="text"
            onChange={
              (e:React.ChangeEvent<HTMLInputElement>) =>{
                setInputString(e.currentTarget.value);
                //props.onChange(e.currentTarget.value);
              }
            }
          />
        </label>
      </form>

  );
}
