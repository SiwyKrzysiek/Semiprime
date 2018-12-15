window.onload = function () {
    document.getElementById("submit-button").onclick = buttonAction;
};

function buttonAction() {
    let alertBox = document.getElementById("is-semiprime-alert");
    
    //displayPositiveMessage(alertBox, "I did it!");
    displayNegativeMessage(alertBox, "You have to go soon!");

    //alertBox.classList.add("invisible");

    return false;
}

function displayPositiveMessage(alertDiv ,message) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-success";

    let content = document.createTextNode(message);

    let strong = document.createElement("strong");
    strong.appendChild(content);
    
    alertDiv.appendChild(strong);
}

function displayNegativeMessage(alertDiv ,message) {
    alertDiv.innerHTML = "";
    alertDiv.className = "alert alert-danger";

    let content = document.createTextNode(message);

    let strong = document.createElement("strong");
    strong.appendChild(content);
    
    alertDiv.appendChild(strong);
}
