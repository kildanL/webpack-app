import html from './index.html';
import css from "./index.scss";
import { mult, sum } from './modules/calc';
import img from './img/7question.png'

const image = new Image();
image.src = img;

console.log(mult(3,8));
console.log(sum(2,8));



