function clearScreen() {
    document.getElementById("screen").value = "";
    document.getElementById("screen").style.color = "#000000";
}
function inputValue(val) {
    if(/[a-zA-Z]/.test(document.getElementById("screen").value)){
        clearScreen();
    }
    document.getElementById("screen").value += val;
    document.getElementById("screen").style.color = "#000000";
}



function deleteLast() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("screen").value;

        if (expression.includes('/0')) {
            document.getElementById("screen").style.color = "#FF0000";
            document.getElementById("screen").value = "Eroare! Împărțire la 0";
            return;
        }
        if(expression == ""){
            document.getElementById("screen").style.color = "#FF0000";
            document.getElementById("screen").value = "Eroare! Introduceţi o valoare!"
            return;
        }
        document.getElementById("screen").style.color = "#1ec957";
        document.getElementById("screen").value = eval(expression);
    } catch (e) {
        document.getElementById("screen").style.color = "#FF0000";
        document.getElementById("screen").value = "Eroare!";
    }
}