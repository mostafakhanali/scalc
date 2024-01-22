const SCREEN = document.querySelector(".screen");
const CALC_BTN = document.querySelector(".calc-buttons");

let calculations;
let operation;

function addToScreen(num) {
    if (Number.parseInt(SCREEN.innerText) === 0) {
        SCREEN.innerText = num;
    }
    else {
        SCREEN.innerText = SCREEN.innerText + num;
    }
};

function clearScreen() {
    SCREEN.innerText = "";
};

// Number.parseFloat("1.00")===Number.parseInt("1")

function calculate(operation, num) {
    num = Number.parseFloat(num)
    if (calculations === undefined) {
        calculations = num;
    }
    else {
        switch (operation) {
            case "+":
                calculations = calculations + num;
                break
            case "-":
                calculations -= num;
                break
            case "x":
                calculations *= num;
                break
            case "÷":
                calculations = calculations / num;
                break
        };
    };

};

CALC_BTN.addEventListener("click", (event) => {
    btn = event.target;
    btnText = btn.innerText;
    switch (btnText) {
        case "C":
            clearScreen();
            SCREEN.innerText = 0
            calculations = undefined;
            break
        case "1":
            addToScreen("1");
            break
        case "2":
            addToScreen("2");
            break
        case "3":
            addToScreen("3");
            break
        case "4":
            addToScreen("4");
            break
        case "5":
            addToScreen("5");
            break
        case "6":
            addToScreen("6");
            break
        case "7":
            addToScreen("7");
            break
        case "8":
            addToScreen("8");
            break
        case "9":
            addToScreen("9");
            break
        case "0":
            addToScreen("0");
            break
        case "000":
            addToScreen("000");
            break
        case ".":
            addToScreen(".");
            break
        case "+":
            calculate(operation, SCREEN.innerText);
            operation = "+";
            clearScreen();
            break
        case "-":
            calculate(operation, SCREEN.innerText);
            operation = "-";
            clearScreen();
            break
        case "x":
            calculate(operation, SCREEN.innerText);
            operation = "x";
            clearScreen();
            break
        case "÷":
            calculate(operation, SCREEN.innerText);
            operation = "÷";
            clearScreen();
            break
        case "=":
            calculate(operation, SCREEN.innerText);
            operation = undefined;
            console.log(calculations)
            SCREEN.innerText = calculations;
            break
        case "←":
            SCREEN.innerText = SCREEN.innerText.substring(0, SCREEN.innerText.length - 1)
            break
    }
}
);

document.addEventListener("keyup", (event) => {
    keycode = event.code;
    switch (keycode) {
        case "Escape":
            clearScreen();
            SCREEN.innerText = 0
            calculations = undefined;
            break
        case "Numpad1":
            addToScreen("1");
            break
        case "Numpad2":
            addToScreen("2");
            break
        case "Numpad3":
            addToScreen("3");
            break
        case "Numpad4":
            addToScreen("4");
            break
        case "Numpad5":
            addToScreen("5");
            break
        case "Numpad6":
            addToScreen("6");
            break
        case "Numpad7":
            addToScreen("7");
            break
        case "Numpad8":
            addToScreen("8");
            break
        case "Numpad9":
            addToScreen("9");
            break
        case "Numpad0":
            addToScreen("0");
            break
        case "NumpadDecimal":
            addToScreen(".");
            break
        case "NumpadAdd":
            calculate(operation, SCREEN.innerText);
            operation = "+";
            clearScreen();
            break
        case "NumpadSubtract":
            calculate(operation, SCREEN.innerText);
            operation = "-";
            clearScreen();
            break
        case "NumpadMultiply":
            calculate(operation, SCREEN.innerText);
            operation = "x";
            clearScreen();
            break
        case "NumpadDivide":
            calculate(operation, SCREEN.innerText);
            operation = "÷";
            clearScreen();
            break
        case "Equal":
            calculate(operation, SCREEN.innerText);
            operation = undefined;
            console.log(calculations)
            SCREEN.innerText = calculations;
            break
        case "NumpadEnter":
            calculate(operation, SCREEN.innerText);
            operation = undefined;
            console.log(calculations)
            SCREEN.innerText = calculations;
            break
        case "Enter":
            calculate(operation, SCREEN.innerText);
            operation = undefined;
            console.log(calculations)
            SCREEN.innerText = calculations;
            break
        case "←":
            SCREEN.innerText = SCREEN.innerText.substring(0, SCREEN.innerText.length - 1)
            break
    }
}
);

