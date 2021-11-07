import * as React from "react";
import InputInterface from '../InputInterface';
import InputState from '../InputInterface';
import {Input} from "./Input";


/*
function App() {
  return (
      <h1>Agricultural Conversion Calculator</h1>
      <div>
        <Input/>
      </div>
  );
}
*/
export default class App extends React.Component<InputInterface, InputState> {
  constructor (props: InputInterface){
    super(props);
  }
  render() {
    //const {inputString, unit} = this.props;
    const inputString:string = this.props.inputString;
    const unit:string = this.props.unit;
    return (
      <div>
        <Input inputString={inputString} />
      </div>
    );
  }
}
