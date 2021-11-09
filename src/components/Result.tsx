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
  var myresultArr: Array<any> = [];
  //const [resultArr, setResultArr] = useState<Array<any>>();
 function calculate(element:any){
   //return element += " lbs";
   var inputNum: number;

   switch(unit){
     case "kg -> lb":
       inputNum= Number(element)*2.04;
       return inputNum.toString() + " lb.";
       break;
     case "ha -> ac":
      inputNum= Number(element)*2.471;
      return inputNum.toString() + " ac";
       break;
     case "kg/ha -> bu/ac":
       if(product == "soy"){
        inputNum= (((Number(element)*2.21)/60)/2.471);
       }else{
         inputNum= (((Number(element)*2.21)/56)/2.471);
       }
       return inputNum.toString() + " bu/ac";
       break;
      case "default":
        break;
   }
 }

  if(result != undefined){
    useEffect(() => {
      window.console.log(result);

    }, [showResult]);
  }
  if(showResult != 0){
    const tableRows = result.map( (element:any)=> {
      element = calculate(element);
      return(
        <div>{ element }</div>
      );
    })
  return(
      <div>
        <table>
          <tr>
            {tableRows}
          </tr>
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
