function show(clicked_value) {
    document.getElementById("calc-output").innerHTML += clicked_value;
}

function erase() {
    document.getElementById("calc-output").innerHTML = "";
}

function calc(expression) {
    var exp = Parser.parse(document.getElementById("calc-output").innerHTML);
    var calc = exp.evaluate();
    document.getElementById("calc-output").innerHTML = calc;
}
