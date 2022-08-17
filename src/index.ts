import { arithmeticStringConvert } from "./utils";
import "./style.css";

const calcInput = document.getElementById('numInput') as HTMLInputElement | null;
const inputResult = document.querySelectorAll('.calc-input-result')[0];

calcInput?.addEventListener('input', event => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  console.log(value);

  const result = arithmeticStringConvert(target.value);

  inputResult.innerHTML = result;
});

calcInput?.addEventListener('focus', event => {
  const target = event.target as HTMLInputElement;
  target.nextSibling.parentElement.classList.add('focus');
});

calcInput?.addEventListener('blur', event => {
  const target = event.target as HTMLInputElement;
  target.nextSibling.parentElement.classList.remove('focus');
});

