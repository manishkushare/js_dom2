//selecting the element

let value= document.querySelector(".value");
let increment = document.querySelector(".increment");
let decrement= document.querySelector(".decrement");
let reset= document.querySelector(".reset");
let counter = 0;

//manipulation
function handleIncrement() {
    counter = counter+1;
    value.innerHTML= counter;
}
function handleDecrement() {
    counter= counter-1;
    value.innerHTML= counter;
}
function handleReset() {
    counter=0;
    value.innerHTML= counter;
}

//event listener
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);
reset.addEventListener("click", handleReset);
