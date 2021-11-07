import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';

export function Product(props: InputInterface) {
  const [product, setProduct] = useState<string>("Corn");
  const [unit, setUnit] = useState<string>();
  //const unitContext = useContext<string>();
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
      <div>empty</div>
        <br></br>
      </div>
    );
  }

}
