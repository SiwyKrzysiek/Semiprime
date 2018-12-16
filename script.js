window.onload = function () {
    console.log(unitTest() ? "Tests passed" : "Tests failed");
};

function checkIfSemiprimeButtonAction() {
    let number = parseInt(document.getElementById("number").value);

    let result = isSemiPrime(number);
    let message = generateMessage(result);

    let alertBox = document.getElementById("is-semiprime-alert");
    
    if (result.answer == true)
        displayPositiveAlert(alertBox, message);
    else
        displayNegativeAlert(alertBox, message);
}

function generateSemiprimesInRangeButtonAction() {
    let begin = parseInt(document.getElementById("start-of-range").value);
    let end = parseInt(document.getElementById("end-of-range").value);

    let alertBox = document.getElementById("wrong-range-alert");
    
    if (end < begin) {
        alertBox.classList.remove("d-none");
        return;
    }
    alertBox.classList.add("d-none");

    document.getElementById("display-results").classList.remove("d-none"); //Make results are visible

    let results = semiprimesInRange(begin, end);
    let outpuList = document.getElementById("display-results");

    putItemsOnList(outpuList, results);
}

function putItemsOnList(list, items) {
    for (item of items) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");

        li.appendChild(document.createTextNode(item));

        list.appendChild(li);
    }
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

function semiprimesInRange(begin, end) {
    let result = [];

    for (let i=begin; i<=end; i++) {
        if (isSemiPrime(i).answer)
            result.push(i);
    }

    return result;
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
