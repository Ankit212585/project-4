(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-Clear');
    let equals = document.querySelector('.btn-Equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equals.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let result = calculate((screen.value));
            screen.value = result;
        }
    })
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })
})();

function calculate(screenValue) {
    // split the screen value by operators
    let tokens = screenValue.split(/([+\-*/])/);
    // initialize the result and the current operator
    let result = 0;
    let operator = "+";
    // loop through the tokens
    for (let token of tokens) {
        // if the token is an operator, update the current operator
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            operator = token;
        } else {
            // otherwise, parse the token as a number and perform the operation
            let num = parseFloat(token);
            switch (operator) {
                case "+":
                    result += num;
                    break;
                case "-":
                    result -= num;
                    break;
                case "*":
                    result *= num;
                    break;
                case "/":
                    result /= num;
                    break;
            }
        }
    }
    // return the final result
    return result;
}