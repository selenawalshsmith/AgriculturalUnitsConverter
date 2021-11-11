import * as React from "react";
import {useState, useEffect, useContext} from "react";
import InputInterface from '../InputInterface';
import {AppContext} from "../AppContext";

export function Conversion(props: InputInterface) {
  //const [unit, setUnit] = useState<string>("kg -> lb");
  const {productContext, unitContext, inputStringContext} = useContext(AppContext);
  const [unit, setUnit] = unitContext;
  return (
      <div>
        Conversion
        <select
          onChange={
            (e:React.ChangeEvent<HTMLSelectElement>) => {
              setUnit(e.target.value);

            }
          }
        >
          <option value="kg -> lb">kg -&#62; lb</option>
          <option value="ha -> ac">ha -&#62; ac</option>
          <option value="kg/ha -> bu/ac">kg&#47;ha -&#62; bu&#47;ac</option>
        </select>
      </div>

  );
}
