import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";



export function countdown(){
  if (!state.isRunning) {
    return
  }
  console.log('iniciou');

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);
  seconds--;

  if(seconds<0){
    seconds=59;
    minutes--;

  }
  if (minutes<0){
    reset();
    return
  }

  updateDisplay(minutes,seconds);

  setTimeout(() =>countdown(),1000);
}


export function updateDisplay (minutes,seconds){
  minutes = minutes ?? /*nullish coalesing operator */ state.minutes ;
  seconds = seconds ?? state.seconds;
  el.minutes.textContent = minutes;
  el.seconds.textContent=seconds;

}