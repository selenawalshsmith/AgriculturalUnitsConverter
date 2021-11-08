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
  var resultArr: Array<number> = [];
  function inputCleanse(x:string){
    //let arr = x.ToCharArray();
    //arr.filter((x))
  }
  /*
  function convertKilos(arr:Array<number>){
    return arr.forEach((num:number) =>{
      num*2.204;
    })
  }
  */
  function convertHectares(arr:Array<number>){
    return arr.forEach((num:number) =>{
      num*2.247;
    })
  }
  function convertKilosHectares(arr:Array<number>){
    return arr.forEach((num:number) =>{
      (((num*2.21)/56)/2.471);
    })
  }
  if(result != undefined){
    useEffect(()=>{
      //if(inputCleanse(result) != true){
      if(result == " " ){
        setResult("Please enter numbers to convert.");
      }else{
        //if(result.includes(" ")){
          //resultArr = result.split(" ");
          resultArr = result.split(" ").map((item:string) =>{
            +item;
          })
          switch(unit){
            case "kg -> lb":
              //convertKilos(resultArr);
              resultArr.forEach((num:number) =>{num*2.204;});
              break;
            case "ha -> ac":
              convertHectares(resultArr);
              break;
            case "kg/ha -> bu/ac":
              convertKilosHectares(resultArr);
          }
        //}
      }
    })
  }


  if(showResult != 0){
  //showResult == number of time you clicked result
  //if(increment != 0 && showResult =< increment){
  //if(showResult > 0  && showResult =< increment){
    //increment++;
    return (
      <div>
        <table>
        <tr>element is visible</tr>
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
