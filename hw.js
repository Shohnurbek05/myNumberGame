const myNumber = Math.random() * 10 + 1;
console.log(Math.floor(myNumber));


const find = document.querySelector(".btn");
const input = document.querySelector(".input");
const text = document.querySelector(".text");
const reset = document.querySelector(".reset");


find.addEventListener("click", () => {
    if (input.value == Math.floor(myNumber)){
    find.classList.remove("btn");
    find.textContent = "Reset";
    text.textContent = `Tabriklaymiz ` + counter + ` - imkoniyatda yutdingiz`;
    reset.addEventListener("click", () => document.location.reload());
    } else if (input.value <= 0) {
        text.textContent = "1 va 10 oralig'idagi son kiriting";
    } else if (input.value > 10) {
        text.textContent = "1 va 10 oralig'idagi son kiriting";
    } else if (input.value > myNumber) {
        text.textContent = "Kichikroq son kiriting";
    } else if (input.value < myNumber) {
        text.textContent = "Kattaroq son kiriting";
    } else {
        text.textContent = "Son kiritmadingiz";
    }
});


let counter = 1;
find.addEventListener("click", () => counter++);