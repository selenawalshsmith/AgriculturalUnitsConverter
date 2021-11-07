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
          <option value="kg -> lb">kilograms -&#62; lbs</option>
          <option value="ha -> ac">hectares -&#62; acres</option>
          <option value="kg/ha -> bu/ac">kilograms&#47;hectare -&#62; bushels&#47;acres</option>
        </select>
      </div>

  );
}
