import { arithmeticStringConvert } from './utils';

export default class NumericInput {
  elId: string;
  type: string;
  className: string;
  arithmeticStringConvert: any;
  value: string;
  result: string

  constructor(elId: string, result: string, type: string, className: string, value: string) {
    this.elId = elId;
    this.type = type;
    this.className = className;
    this.value = value;
    this.result = result;
  }

  createInput() {
    const hostEl = document.getElementById(this.elId);
    const calcResult = document.getElementById(this.result);

    const numericInput = document.createElement("input");

    numericInput.setAttribute('type', this.type);
    numericInput.setAttribute('value', this.value);
    numericInput.setAttribute('class', this.className);
    numericInput.setAttribute('id', this.elId);

    hostEl?.append(numericInput);

    numericInput.addEventListener('input', event => {
      const target = event.target as HTMLInputElement;
      const value = target.value;

      calcResult.innerHTML = arithmeticStringConvert(value);
    })

  }
}
