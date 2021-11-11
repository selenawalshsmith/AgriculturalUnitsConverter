import {App } from "../components/App";
import {checkIfNum} from "../components/Util";
import {calculate} from "../components/Util";

describe("test checkIfNum (check if array only contains numbers)", () => {
  const testArr: Array<any> = [1, 2, "3", 4, 5, "6"];
  const testArr2: Array<any> = ["0", "10", "400", "4.5", "5000000", "97"];
  const testArr3: Array<any> = ["0", "1&", ")|+", "6", "5", "^"];
  const testArr4: Array<any> = ["0", "15", "#", "54", "54", "*"];

  it("should return true for checkIfNum()", () => {
    expect(checkIfNum(testArr)).toBe(true);
  });

  it("should return true for checkIfNum()", () => {
    expect(checkIfNum(testArr2)).toBe(true);
  });

  it("should return false for checkIfNum()", () => {
    expect(checkIfNum(testArr3)).toBe(false);
  });

  it("should return false for checkIfNum()", () => {
    expect(checkIfNum(testArr4)).toBe(false);
  });
});

describe("test Calculate (Calculate the unit conversions)", () => {
  const productCorn:string = "corn";
  const productSoy:string = "soy";
  const kg_haTobu_ac:string = "kg/ha -> bu/ac";
  const kg_lb:string = "kg -> lb";
  const ha_ac:string = "ha -> ac";


  it("kg -> lb", () => {
    expect(calculate(444, kg_lb, productCorn)).toBe("905. lbs");
  });
  it("kg -> lb", () => {
    expect(calculate(83, kg_lb, productCorn)).toBe("169. lbs");
  });

  it("ha -> ac", () => {
    expect(calculate(99, ha_ac, productCorn)).toBe("244. ac");
  });
  it("ha -> ac", () => {
    expect(calculate(14, ha_ac, productCorn)).toBe("34.5 ac");
  });

  it("kg/ha -> bu/acre for soy", () => {
    expect(calculate(23, kg_haTobu_ac, productSoy)).toBe("0.34 bu/ac");
  });
  it("kg/ha -> bu/acre for soy", () => {
    expect(calculate(45, kg_haTobu_ac, productSoy)).toBe("0.67 bu/ac");
  });

  it("kg/ha -> bu/acre for corn", () => {
    expect(calculate(3, kg_haTobu_ac, productCorn)).toBe("0.04 bu/ac");
  });
  it("kg/ha -> bu/acre for corn", () => {
    expect(calculate(91, kg_haTobu_ac, productCorn)).toBe("1.45 bu/ac");
  });

});
