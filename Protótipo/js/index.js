//Buscando elementos

// visor
const result = document.getElementsByClassName("result")[0];
let display = document.getElementsByClassName("display");
let currentDisplay = display[0]
let calc;


// buttons
const button = document.getElementsByTagName("button");

let condicion = true;
button[0].addEventListener("click", () => {

    if (condicion) {
        display[0].classList.add("none");
        currentDisplay.value = "";
        display[1].classList.remove("none");
        currentCalc = waterCalc
        currentDisplay = display[1]
        console.log(currentDisplay)
        button[21].addEventListener('click', currentCalc); //Calculando resultado
        condicion = false;


    }

    else if (condicion == false) {
        display[1].classList.add("none");
        currentDisplay.value = "";
        display[0].classList.remove("none");
        currentCalc = calculation;
        currentDisplay = display[0];
        console.log(currentDisplay)
        button[21].addEventListener('click', currentCalc); //Calculando resultado
        condicion = true;
    }
})
// button[1]
// button[2]
button[3].addEventListener("click", () => currentDisplay.value = ""); //AC
button[4].addEventListener("click", () => currentDisplay.value = currentDisplay.value.slice(0, -1));//DEL
button[5].addEventListener("click", () => currentDisplay.value += "%"); //%
button[6].addEventListener("click", () => currentDisplay.value += "/"); // / 
button[7].addEventListener("click", () => currentDisplay.value += 7); //7
button[8].addEventListener("click", () => currentDisplay.value += 8); //8
button[9].addEventListener("click", () => currentDisplay.value += 9); //9
button[10].addEventListener("click", () => currentDisplay.value += "*"); //*
button[11].addEventListener("click", () => currentDisplay.value += 4); //4
button[12].addEventListener("click", () => currentDisplay.value += 5) //5
button[13].addEventListener("click", () => currentDisplay.value += 6); //6
button[14].addEventListener("click", () => currentDisplay.value += "-"); //-
button[15].addEventListener("click", () => currentDisplay.value += 1); //1
button[16].addEventListener("click", () => currentDisplay.value += 2); //2
button[17].addEventListener("click", () => currentDisplay.value += 3); //3
button[18].addEventListener("click", () => currentDisplay.value += "+"); //+
button[19].addEventListener("click", () => currentDisplay.value += "."); //.
button[20].addEventListener("click", () => currentDisplay.value += 0); //0
button[21].addEventListener('click', calculation); //Calculando resultado


//Funções
let currentCalc;
function calculation() {
    calc = eval(currentDisplay.value);
    console.log(calc);
    result.textContent = calc
}

function waterCalc() {
    calc = currentDisplay.value * 30 + ("ml");
    console.log(calc);
    result.textContent = calc
}

