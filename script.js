window.onload = function () {
    //document.getElementById("submit-button").onclick = buttonAction;

    console.log(unitTest() ? "Tests passed" : "Tests failed");
};

function buttonAction() {
    let alertBox = document.getElementById("is-semiprime-alert");
    
    //displayPositiveMessage(alertBox, "I did it!");
    displayNegativeMessage(alertBox, "You have to go soon!");

    //alertBox.classList.add("invisible");

    return false;
}

function checkIfSemiprimeButtonAction() {
    console.log("Button clicked");

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

function displayPositiveMessage(alertDiv ,textNode) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-success";
    
    alertDiv.appendChild(textNode);
}

function displayNegativeMessage(alertDiv ,textNode) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-danger";
    
    alertDiv.appendChild(textNode);
}
