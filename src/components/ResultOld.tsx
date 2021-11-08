import * as React from "react";
import {useEffect, useContext, useState} from "react";
import InputInterface from '../InputInterface';
import {AppContext, ResultContext} from "../AppContext";
import {ResultRow} from "./ResultRow";

export function Result(props: InputInterface) {
  const {productContext, unitContext, inputStringContext, showResultContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;
  const [result, setResult] = useState<Array<string>>([]);
  const [resultString, setResultString] = useState<string>();

  //var x: boolean = false;
  let clickCount: number = 0;
  //var renderResultCount = 0;
  var hideResult = 0;
  var lastShowResult = 0;
  //const showResults: boolean = false;
  /*
  function addResultToState = (newResult<string>) => {
    setResult([...result, newResult]);
  }
  */
  function calculateConversion(){
    if(inputString== "" || inputString== " " ){
      setResult([...result, "Please enter numbers to convert."]);
    }else{
      //setResult(inputString);
    }
  }
  useEffect(()=>{
    //renderResultCount++;
    //if(clickCount < showResult)
    if(showResult > 0 && showResult > lastShowResult){
      calculateConversion();
    }
    //if(clickCount != showResult){clickCount++; calculateConversion();}
    console.log("Result component state showResult " + showResult);
    console.log("Result Component state (input string)" + inputString);
    //if(showResult > 0){x = true}
    //calculateConversion();
    lastShowResult == showResult;
  })
  /*
  function displayRow((item:string) =>{
    return <ResultRow/>
  })
  */

    const tableRows = result.map( (item:string)=> {
      setResultString(item);
      return(
        <div>{item}</div>
      );
    })


  //const tableRows= result.forEach(item => <Result)
  //if(renderResultCount > showResult){

  if(showResult != 0){
    return (
      <div>
        <table>
          <div>element is visible</div>
          <tr>
            1 { tableRows }
              {resultString}
          </tr>
        </table>
      </div>
    );
  } else{
    return(
      <div>element is not visible :)</div>
    );
  }

  //return (<div>hello {tableRows}</div>);

}
/*
function tableRows(){
  const tableRows = result.map( (item:string)=> {
    setResultString(item);
    return(
      <div>{item}</div>
    );
  })
}
*/
