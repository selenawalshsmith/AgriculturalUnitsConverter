import * as React from "react";
import {useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";

export function Result(props: InputInterface) {
  const {productContext, unitContext, inputStringContext, showResultContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;
  //const showResults: boolean = false;
  const results: string[] = [];
  var renderResultCount = 0;
  useEffect(()=>{
    renderResultCount++;
  })
  if(renderResultCount != showResult){
    return (
      <div>
        <table>
          <tr>
            result a
          </tr>
        </table>
      </div>
    );
  } else{
    return(
      <div></div>
    );
  }

}
