let input = document.querySelector("#input-box")
function addValue(elementVal) {
    input.value += elementVal
}

function clearValue() {
    input.value = ""
}

function deleteChar() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    input.value = eval(input.value)
}
