import * as React from "react";
import {useEffect, useContext, useState, useReducer} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";

export function Result(props: InputInterface) {
  const {productContext, unitContext, resultContext, showResultContext} = useContext(AppContext);
  const [result, setResult] = resultContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;


  const checkForBadChar = (str:string) => {
    var badChars: string = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    for(let i = 0; i <= badChars.length; i++){
      if(str.indexOf(badChars[i]) > -1){
        return true;
      }
    }
  }
 function calculate(element:any){
   //return element += " lbs";
   if(!!element == false  ){
     return "Enter numbers to be converted.";
   }else if(checkForBadChar(element) == true){
     return "Enter numbers to be converted.";
   } else{
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
         return inputNum.toString().substring(0,4) + " bu/ac";
         //.slice(3)
         break;
        case "default":
          break;
     }
   }
 }

  useEffect(()=>{}, [showResult]);

  if(showResult != 0){
    const tableRows = result.map( (element:any)=> {
      element = calculate(element);
      if(element == "Enter numbers to be converted."){
        return(
          <div>Enter numbers to be converted.</div>
        );
        return;
      } else{
        return(
          <div>{ element }</div>
        );
      }
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
      <div>Enter numbers to be converted.</div>
    );
  }
}

//export default Result;
