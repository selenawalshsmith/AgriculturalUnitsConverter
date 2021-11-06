import * as React, {useState} from "react";

export function Input() {
  return (
      <form>
        <label>
        String Input
        <input type="text" value="" OnChange{this.HandleChange}>
        <label/>
      </form>

  );
}

export default Input;
