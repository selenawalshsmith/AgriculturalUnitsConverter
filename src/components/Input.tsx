import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";
import "../styles/App.css";

export function Input(props: InputInterface) {
  const {inputStringContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;

  return (
    <div>
      <form>
        <label>
          String Input
          <input
            type="text"
            onInput={
              (e:React.ChangeEvent<HTMLInputElement>) =>{
                setInputString(e.target.value);
              }
            }
          />
        </label>
      </form>
    </div>
  );
}
