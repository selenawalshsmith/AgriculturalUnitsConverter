export const checkIfNum = (arr:  Array<any>) => {
  const illegalCharsPresent = arr.every((element: any) => {
    if(isNaN(Number(element))){
      return false;
    }
    return true;
  });
  return illegalCharsPresent;
}

const isGreaterThanOne = (n: number) => {
  if(n > 1){ return true;}
}

export const calculate = (element:any, unit:string, product:string) => {
  var inputNum: number;
  var pound: string ="lb.";
  switch(unit){
    case "kg -> lb":
      inputNum= Number(element)*2.04;
      if(inputNum > 1){
        pound =" lbs";
      }
      return inputNum.toString().substring(0,4) + pound;
      break;
    case "ha -> ac":
      inputNum= Number(element)*2.471;
      return inputNum.toString().substring(0,4) + " ac";
      break;
    case "kg/ha -> bu/ac":
      if(product == "soy"){
        inputNum= (((Number(element)*2.21)/60)/2.471);
      }else{
        inputNum= (((Number(element)*2.21)/56)/2.471);
      }
      return inputNum.toString().substring(0,4) + " bu/ac";
      break;
    case "default":
      break;
  }
}
