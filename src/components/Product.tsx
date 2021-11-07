import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";

export function Product(props: InputInterface) {
  const {productContext, unitContext, inputStringContext} = useContext(AppContext);
  const [product, setProduct] = productContext;
  const [unit, setUnit] = unitContext;
  if(unit == "kg/ha -> bu/ac"){
    return (
        <div>
          Product
          <select
            onChange={
              (e:React.ChangeEvent<HTMLSelectElement>) => {
                setProduct(e.target.value);
              }
            }
          >
            <option value="corn">Corn</option>
            <option value="soy">Soy</option>
          </select>
        </div>
    );
  }
  else{
    return(
      <div>
        <br></br>
      </div>
    );
  }

}
