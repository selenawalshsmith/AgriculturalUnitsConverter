export default interface Input{
  inputString?: string;
  unit?: string;
  product?: string;
  showResult?: number;
  //[result:number]?: string;
  result?: Array<any>;
}

export default interface InputState{
  inputString?: string;
  unit?: string;
}
