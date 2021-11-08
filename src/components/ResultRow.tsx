import * as React from "react";
import {useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext, ResultContext} from "../AppContext";

export function ResultRow(props: {}) {
  /*
  const {productContext, unitContext, inputStringContext, showResultContext, resultContext} = useContext(AppContext);
  const [inputString, setInputString] = inputStringContext;
  const [unit, setUnit] = unitContext;
  const [product, setProduct] = productContext;
  const [showResult, setShowResult] = showResultContext;
  const [result, setResult] = resultContext;
  */

  const {resultStringContext} = useContext(ResultContext);
  const [resultString, setResultString] = resultStringContext;
  useEffect(() =>{
    window.console.log("Result row component state" + resultString );
  })
  return(
      <div>
          <tr>
            You're showing the result
            {resultString}
          </tr>
      </div>
    );

}

/*
class ResultRow extends React.Component<InputInterface, {}> {
  constructor (props: InputInterface){
    super(props);
  }
  render(){
    return(
      <div>{props.result[i]}</div>
    )
  }
};
export default ResultRow;
*/
