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

export const App: FunctionComponent<InputInterface> = () => {

  const [inputString, setInputString] = useState<string>("");
  const [product, setProduct] = useState<string>("Corn");
  const [unit, setUnit] = useState<string>("kg -> lb");

  useEffect(()=>{
    console.log(product);
    console.log(unit);
    console.log(inputString);
  })

  return (
      <div>
      <AppContext.Provider value={{productContext: [product, setProduct], unitContext: [unit, setUnit], inputStringContext:[inputString, setInputString]}} >
          <Input/>
          <Conversion/>
          <Product/>
      </AppContext.Provider>
      </div>
  );
}
export default App;
