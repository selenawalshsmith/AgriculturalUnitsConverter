import * as React from "react";
import {useEffect, useContext, useState, useReducer} from "react";
import InputInterface from '../InputInterface';
import {AppContext, ResultContext} from "../AppContext";
import {ResultRow} from "./ResultRow";

export function Result(props: InputInterface) {
  const {productContext, unitContext, resultContext, showResultContext} = useContext(AppContext);
  const [result, setResult] = resultContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;
  //var resultArr: Array<number> = [];
  const [resultArr, setResultArr] = useState<Array<string>>();
  /*
  function calculateConversion(item:<string>){
    return item.concat("  lbs");
  }
  */
  function calculateResultArr(){
    /*
    return const splitArr:Array<string> = result.split(" ").map((item:string) =>{
      //item = calculateConversion(item);
      //item = item.concat(" lbs");

    });
    */
    return result.split(" ");
    /*
    return temp.map((item: string) => {
      item.concat(" lbs");
    });
    */
    //setResultArr(splitArr);
    //window.console.log(splitArr);
  }
//if(result != undefined){
useEffect(() => {
  if(result!=undefined){
    window.console.log(calculateResultArr());
    window.console.log(result);
  }
}, [showResult]);
//}


  if(showResult != 0){
  //showResult == number of time you clicked result
  //if(increment != 0 && showResult =< increment){
  //if(showResult > 0  && showResult =< increment){
    //increment++;
    return (
      <div>
        <div>element is visible</div>
        <table>
        <tr></tr>
        </table>
      </div>
    );
  } else{
    return(
      <div>element is not visible :)</div>
    );
  }
}

//export default Result;
