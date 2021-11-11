import * as React from "react";
import {useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";
import {calculate} from "./Util"

export function Result(props: InputInterface) {
  const {productContext, unitContext, resultContext, showResultContext} = useContext(AppContext);
  const [result, setResult] = resultContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;

  useEffect(()=>{}, [showResult]);

  if(showResult != 0){
    const tableRows = result.map( (element:any)=> {
      element = calculate(element, unit, product);
      return(
        <div>{ element }</div>
      );
    });
    return(
      <div>
        <table>
          <tr>
            <td>{tableRows}</td>
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
