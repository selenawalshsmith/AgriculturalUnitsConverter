import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";
import "../styles/App.css";

export function Input(props: InputInterface) {
  //const [inputString, setInputString] = useState<string>();
  //const {inputString, setInputString } = useContext(AppContext)
  const {productContext, unitContext, inputStringContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;
  const illegalCharsPresent: boolean = false;
  //function checkIfNum(arr: Array<any>){
  //function checkIfNum(e:React.ChangeEvent<HTMLInputElement>){
  function checkIfNum(str: string){
    //var str: string = e.target.value.toString();
    var arr: Array<any> = str.split(" ");
    arr.forEach((element: any) => {
      if(isNaN(Number(element))){
        illegalCharsPresent == true;
      }
    });
    if(illegalCharsPresent){
      alert("Error: Please enter numeric values only");
    } else{
      setInputString(str);
    }
  }
  return (
      <form>
        <label>
          String Input
          <input
            type="text"
            pattern="[0-9]*"
            onInput={
              (e:React.ChangeEvent<HTMLInputElement>) =>{
                //setInputString(e.currentTarget.value);
                //props.onChange(e.currentTarget.value);
                checkIfNum(e.currentTarget.value);
              }
            }
          />
        </label>
      </form>

  );
}
