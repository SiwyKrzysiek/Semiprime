window.onload = function () {
    //document.getElementById("submit-button").onclick = buttonAction;

    console.log(unitTest() ? "Tests passed" : "Tests failed");
};

function checkIfSemiprimeButtonAction() {
    //console.log("Button clicked");
    let number = parseInt(document.getElementById("number").value);

    let result = isSemiPrime(number);
    let message = generateMessage(result);

    let alertBox = document.getElementById("is-semiprime-alert");
    
    if (result.answer == true)
        displayPositiveAlert(alertBox, message);
    else
        displayNegativeAlert(alertBox, message);
}

function unitTest() {
    let result = isSemiPrime(57);
    if (!result.answer)
        return false;

    if (!isSemiPrime(121).answer)
        return false;
    
    if (isSemiPrime(186).answer)
        return false;

    return true;
}

class Result {
    constructor(answer) {
        this.answer = answer;
        this.dividers = new Array;
    }
}

function isSemiPrime(number) {
    if (number <= 0 || !Number.isInteger(number))
        return false;

    let a = findSmalestDivider(number);
    if (a==number) return new Result(false);
    number /= a;

    let b = findSmalestDivider(number);
    if (b != number) return new Result(false);
    
    let result = new Result(true);
    result.dividers = [a, b];
    return result;
}

function findSmalestDivider(number) {
    if (number % 2 == 0)
        return 2;
    
    for (let i=3; i*i <= number; i+=2) {
        if (number % i == 0)
            return i;
    }

    return number;
}

function generateMessage(result) {
    let message = document.createElement("span");

    if (result.answer) {
        let strong = document.createElement("strong");
        strong.appendChild(document.createTextNode("It's semiprime!"));
        message.appendChild(strong);

        let a = result.dividers[0];
        let b = result.dividers[1]
        let orginalNumber = a * b;

        let explenation = document.createTextNode(` Because ${orginalNumber} = ${a}*${b}`);
        message.appendChild(explenation);
    }
    else {
        let strong = document.createElement("strong");
        strong.appendChild(document.createTextNode("It's not semiprime"));
        message.appendChild(strong);
    }

    return message;
}

function displayPositiveAlert(alertDiv ,textNode) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-success";
    
    alertDiv.appendChild(textNode);
}

function displayNegativeAlert(alertDiv ,textNode) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-danger";
    
    alertDiv.appendChild(textNode);
}
