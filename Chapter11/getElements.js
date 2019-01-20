function onTagButtonClick() {
    let buttonTags = document.getElementsByTagName("button");
    let result = "";

    for (let i = 0; i < buttonTags.length; i++) {
        result += buttonTags[i].textContent + ".";
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;
}

function onClassButtonClick() {

    let buttonTags = document.getElementsByClassName("redText");
    let result = "";

    for (let i = 0; i < buttonTags.length; i++) {
        result += buttonTags[i].textContent + "：";
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;

}

function onNameButtonClick() {

    let buttonTags = document.getElementsByName("skill");
    let result = "チェックされたもの：";

    for (let i = 0; i < buttonTags.length; i++) {
        if (buttonTags[i].checked) {
            result += buttonTags[i].value + ",";
        }
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;

}