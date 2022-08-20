import "./style.css";

export default class NumericInput {
  arithmeticStringConvert: any;
  className: string;
  elId: string;
  id: string;
  type: string;
  value: string;

  constructor(elId: string, id: string, type: string, className: string, value: string) {
    this.className = className;
    this.elId = elId;
    this.id = id;
    this.type = type;
    this.value = value;
    this.createInput();
  }

  createInput() {
    const hostEl = document.getElementById(this.elId);

    const numericInputContainer = document.createElement("div");
    const numericInputResult = document.createElement("div");
    const numericInput = document.createElement("input");
    const numericInputLabel = document.createElement("label");

    numericInputContainer.classList.add('calc-input-container');
    numericInputResult.classList.add('calc-input-result');

    numericInput.setAttribute('type', this.type);
    numericInput.setAttribute('value', this.value);
    numericInput.setAttribute('class', this.className);
    numericInput.setAttribute('id', this.id);
    numericInputLabel.setAttribute('for', this.id);
    numericInputResult.setAttribute('id', 'calcResult');

    numericInputContainer.append(numericInput, numericInputLabel, numericInputResult);

    hostEl?.append(numericInputContainer);

    numericInputLabel.innerHTML = 'Result:';

    const regAlphabet = /^[a-z]+$/i;

    numericInput.addEventListener('input', event => {
      const target = event.target as HTMLInputElement;
      const value = target.value;

      if (value == '' || regAlphabet.test(value)) {
        numericInputResult.innerHTML = '?';
        numericInputContainer.classList.add('invalid');
        return false;
      } else {
        numericInputContainer.classList.remove('invalid');
      }

      numericInputResult.innerHTML = arithmeticStringConvert(value);
    })
  }
}

/**
 * Arithmetic string convert
 */
const arithmeticStringConvert = (fn: any) => {
  return new Function("return " + fn)();
};
