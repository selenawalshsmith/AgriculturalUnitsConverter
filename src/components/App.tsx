import * as React from "react";
import {FunctionComponent} from "react";
import {useEffect, useState} from "react";
import {AppContext} from "../AppContext";
import InputInterface from '../InputInterface';
//import InputState from '../InputInterface';
import {Input} from "./Input";
import {Conversion} from "./Conversion";
import {Product} from "./Product";
import {Result} from "./Result";
import {checkIfNum} from "./Util";

export const App: FunctionComponent<InputInterface> = () => {
  const [inputString, setInputString] = useState<string>("");
  const [product, setProduct] = useState<string>("Corn");
  const [unit, setUnit] = useState<string>("kg -> lb");
  const [showResult, setShowResult] = useState<number>(0);
  const [result, setResult] = useState<Array<any>>();

  let illegalCharsPresent: boolean = false;
  let checkIfNumArr: Array<any> = [];

  const handleOnClick = (e:any) => {
    const checkIfNumArr = inputString.split(" ");
    if(checkIfNum(checkIfNumArr)){
      setShowResult(showResult + 1);
      setResult(checkIfNumArr);
    }else{
      alert("Error: Please enter numeric values only");
      setResult([ ]);
    };
  }
  return (
    <div>
      <h3>Agricultural Units Converter</h3>
      <AppContext.Provider value={{
        productContext: [product, setProduct],
        unitContext: [unit, setUnit],
          inputStringContext:[inputString, setInputString],
          resultContext:[result, setResult],
          showResultContext:[showResult, setShowResult],
      }} >
        <Input/>
        <Conversion/>
        <Product/>
        <div>
          <button onClick={handleOnClick}>Convert</button>
        </div>
        <Result/>
      </AppContext.Provider>
    </div>
  );
}
export default App;
