function subtract() {
    let firstNum = Number(document.getElementById("firstNumber"));
    let secondNum = Number(document.getElementById("secondNumber"));
    let result = firstNum-secondNum;
    document.getElementById("result").textContent=result;
}
