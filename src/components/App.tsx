import * as React from "react";
import {FunctionComponent} from "react";
import {createContext} from "react";
import {useEffect} from "react";
import {useState} from "react";
import {AppContext} from "../AppContext";
import InputInterface from '../InputInterface';
import InputState from '../InputInterface';
import {Input} from "./Input";
import {Conversion} from "./Conversion";
import {Product} from "./Product";
import {Result} from "./Result";

export const App: FunctionComponent<InputInterface> = () => {

  const [inputString, setInputString] = useState<string>("");
  const [product, setProduct] = useState<string>("Corn");
  const [unit, setUnit] = useState<string>("kg -> lb");
  //only update Result component when showResult increments.
  //Result component renders empty div while showResult == 0
  const [showResult, setShowResult] = useState<number>(0);
  const [result, setResult] = useState<Array<any>>();

  var illegalCharsPresent: boolean = false;
  var checkIfNumArr: Array<any> = [];
  function checkIfNum(arr:  Array<any>){
    const illegalCharsPresent = arr.every((element: any) => {
      if(isNaN(Number(element))){
        return false;
      }
      return true;
    });
    if(illegalCharsPresent == false){
      alert("Error: Please enter numeric values only");
    } else{
      setShowResult(showResult + 1);
      setResult(arr);
    }
  }

    return (
        <div>
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
              <button onClick={(e:React.MouseEvent) =>{
                const checkIfNumArr = inputString.split(" ");
                //setShowResult(showResult + 1);
                //setResult(results);

                checkIfNum(checkIfNumArr);
                /*
                if(illegalCharsPresent == false){
                  setShowResult(showResult + 1);
                  setResult(checkIfNumArr);
                }
                */

              }}
              >Convert</button>
            </div>
            <Result/>
        </AppContext.Provider>
        </div>
    );
}
export default App;
