const buttons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#result");

let oldValue = null;
let oprator = null;
let concat = false;
let calc_result = false;

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let target = event.target;
        if (target.id === "clear") {
            oldValue = null;
            oprator = null;
            display.textContent = 0;
            concat = false;
        } else if (target.id === "plus-minus") {
            if (!display.textContent.includes("-")) {
                display.textContent = "-" + display.textContent;
            } else {
                display.textContent = display.textContent.substr(1);
            }
        } else if (target.id === "percent") {
            display.textContent = parseFloat(display.textContent / 100);
        } else if (target.id === "dot") {
            if (!display.textContent.includes(".")) display.textContent += ".";
        } else if (
            target.id === "division" ||
            target.id === "add" ||
            target.id === "multiplication" ||
            target.id === "minus"
        ) {
            if (oprator !== null && !calc_result) {
                if (oprator === "+") {
                    display.textContent =
                        parseFloat(display.textContent) + parseFloat(oldValue);
                }
                if (oprator === "-") {
                    display.textContent = oldValue - display.textContent;
                }
                if (oprator === "×") {
                    display.textContent = oldValue * display.textContent;
                }
                if (oprator === "÷") {
                    display.textContent = oldValue / display.textContent;
                }
                calc_result = true;
                concat = false;
            }
            oprator = target.textContent;
            oldValue = display.textContent;
            concat = false;
        } else if (target.id === "equal") {
            if (!calc_result) {
                if (oprator === "+") {
                    display.textContent =
                        parseFloat(display.textContent) + parseFloat(oldValue);
                }
                if (oprator === "-") {
                    display.textContent = oldValue - display.textContent;
                }
                if (oprator === "×") {
                    display.textContent = oldValue * display.textContent;
                }
                if (oprator === "÷") {
                    display.textContent = oldValue / display.textContent;
                }
                calc_result = true;
                concat = false;
            }
            oprator = null;
        } else {
            if (concat) {
                display.textContent += target.innerText;
            } else {
                display.textContent = target.innerText;
                concat = true;
            }
            calc_result = false;
        }
        // change display'fontSize by its length
        if (
            display.textContent.length >= 10 &&
            display.textContent.length <= 12
        ) {
            display.style.fontSize = "30px";
        } else if (
            display.textContent.length >= 13 &&
            display.textContent.length <= 18
        ) {
            display.style.fontSize = "20px";
        } else if (
            display.textContent.length >= 19 &&
            display.textContent.length <= 20
        ) {
            display.style.fontSize = "18px";
        } else if (display.textContent.length >= 16) {
            display.style.fontSize = "10px";
        } else {
            display.style.fontSize = "39px";
        }
    });
});
