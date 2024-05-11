//Buscando elementos

//Visor
const result = document.getElementsByClassName("result")[0]; //Resultado

const calculatorInput = document.getElementsByClassName("calculatorInput")[0];//Calculator Input(eval)

const waterInput = document.getElementsByClassName("waterInput")[0];//Água Input peso(Kg)


const benedictInput = document.getElementsByClassName("benedict");//Benedict inputs

const benedictButton = document.querySelectorAll("button.btn-benedict");//Benedict botões
const benedictBtnH = benedictButton[0];//Benedict botão homem
const benedictBtnM = benedictButton[1];//Benedict botão mulher

const benedictInputYOld = benedictInput[0];//Benedict idade

const benedictInputM = benedictInput[1];//Benedict altura(M)
const benedictInputKg = benedictInput[2];//Benedict peso(Kg)


const imcInput = document.getElementsByClassName("imcInput");//Imc Inputs
const imcInputM = imcInput[0];//Imc input altura(M)
const imcInputKg = imcInput[1];//Imc input peso(Kg)


//Botões
const button = document.querySelectorAll(".buttons button");

//Botões eventos

//Números
button[7].addEventListener("click", () => currentInput.value += 7);//7
button[8].addEventListener("click", () => currentInput.value += 8);//8
button[9].addEventListener("click", () => currentInput.value += 9);//9
//
button[11].addEventListener("click", () => currentInput.value += 4);//4
button[12].addEventListener("click", () => currentInput.value += 5);//5
button[13].addEventListener("click", () => currentInput.value += 6);//6
//
button[15].addEventListener("click", () => currentInput.value += 1);//1
button[16].addEventListener("click", () => currentInput.value += 2);//2
button[17].addEventListener("click", () => currentInput.value += 3);//3
//
button[20].addEventListener("click", () => currentInput.value += 0);//0

//Limpar
button[3].addEventListener("click", () => currentInput.value = "");//AC
button[4].addEventListener("click", () => currentInput.value = currentInput.value.slice(0, -1));//DEL

//Operadores
button[5].addEventListener("click", () => currentInput.value += "%");//%
button[6].addEventListener("click", () => currentInput.value += "/");// /
button[10].addEventListener("click", () => currentInput.value += "*");// *
button[14].addEventListener("click", () => currentInput.value += "-");//-
button[18].addEventListener("click", () => currentInput.value += "+");//+
button[19].addEventListener("click", () => currentInput.value += ".");//.

//Inputs
const inputs = [calculatorInput, waterInput, benedictInput, imcInput];//Inputs
let currentInput = inputs[0];//Input Atual


imcInputM.addEventListener("click", () => currentInput = imcInputM);//IMC inputs
imcInputKg.addEventListener("click", () => currentInput = imcInputKg);


benedictInputM.addEventListener("click", () => currentInput = benedictInputM);//Benedict inputs
benedictInputKg.addEventListener("click", () => currentInput = benedictInputKg);
benedictInputYOld.addEventListener("click", () => currentInput = benedictInputYOld);

let gender;//Benedict botões
benedictBtnH.addEventListener("click", () => {
    gender = "H";

    benedictBtnM.classList.add("none");

    benedictInputYOld.classList.remove("none")
});

benedictBtnM.addEventListener("click", () => {
    gender = "M";

    benedictBtnH.classList.add("none");

    benedictInputYOld.classList.remove("none")

});

//Calcular (=)
let calculations = [calculator, waterCalc, benedictCalc, imcCalc];//Cálculos

let currentCalculation = calculations[0];//Cálculo atual

button[21].addEventListener("click", () => currentCalculation());//=

//New calculator functions
button[0].addEventListener("click", () => {
    if (currentInput == calculatorInput) {
        calculatorInput.classList.add("none"); //Removendo visualmente input(calculadora)
        calculatorInput.value = ""; //Limpando Input atual

        currentInput = waterInput; //Agora input atual é o da água
        waterInput.classList.remove("none"); //Mostrando input(água)

        currentCalculation = calculations[1] //Cálculo atual é o da água

    }/*Mudando para input da água*/

    else if (currentInput == waterInput) {
        waterInput.classList.add("none"); //Sumindo com input(água)
        waterInput.value = ""; //Limpando input(água)

        currentInput = inputs[0]; //Input atual agora é calculadora
        calculatorInput.classList.remove("none"); //Mostrando Input

        currentCalculation = calculations[0] //Cálculo atual é calculadora

    }/*Removendo input(água) e voltando para calculadora*/

    else if (currentInput == inputs[2] || currentInput == benedictInputKg || currentInput == benedictInputM || currentInput == benedictInputYOld) {

        benedictBtnH.classList.add("none");//Removendo inputs(benedict)
        benedictBtnM.classList.add("none");
        benedictInputYOld.classList.add("none");

        benedictInputM.classList.add("none");
        benedictInputKg.classList.add("none");

        benedictInputM.value = "";//Limpando inpurs(benedict)
        benedictInputKg.value = "";

        currentInput = waterInput;//Input atual agora é água
        waterInput.classList.remove("none");//Mostrando input

        currentCalculation = calculations[1]//Cálculo atual = água

    }/*Removendo inputs(benedict) e voltando para água*/

    else if (currentInput == inputs[3] || currentInput == imcInputM || currentInput == imcInputKg) {
        imcInputM.classList.add("none");//Sumindo com inputs(IMC)
        imcInputKg.classList.add("none");

        imcInputM.value = "";//Lipando inputs(IMC)
        imcInputKg.value = "";

        currentInput = waterInput;//Agora input atual é água
        currentInput.classList.remove("none");//Mostrando Input

        currentCalculation = calculations[1]//Calculo atual = água

    }/*Mudando para input água, se input atual for de IMC*/

    else {
        console.log("Ocorreu um erro.")
    }
});//Calculador de água


button[1].addEventListener("click", () => {
    if (currentInput == calculatorInput) {
        calculatorInput.classList.add("none");//Removendo input(calculadora)
        calculatorInput.value = "";//Limpando inputs

        currentInput = inputs[2];//Input atual = Benedict
        benedictBtnH.classList.remove("none");//Mostrando inputs(benedict)
        benedictBtnM.classList.remove("none");

        benedictInputM.classList.remove("none");
        benedictInputKg.classList.remove("none");

        currentCalculation = calculations[2]//Calculo atual = benedict

    }/*Mudando para inputs Benedict*/

    else if (currentInput == inputs[2] || currentInput == benedictInputM || currentInput == benedictInputKg || currentInput == benedictInputYOld) {
        benedictBtnH.classList.add("none");//Removendo inputs(benedict)
        benedictBtnM.classList.add("none");
        benedictInputYOld.classList.add("none")

        benedictInputM.classList.add("none");
        benedictInputKg.classList.add("none");

        benedictInputM.value = "";//Limpando inputs
        benedictInputKg.value = "";

        currentInput = inputs[0];//Input atual = calculadora
        currentInput.classList.remove("none")//Mostrando input(calculadora)

    }/*Removendo inputs(Benedict) e voltando para calculadora*/

    else if (currentInput == waterInput) {
        waterInput.classList.add("none");//Removendo input(water)
        waterInput.value = "";//Limpando input

        currentInput = inputs[2];//Input atual agora benedict
        benedictBtnH.classList.remove("none");//Mostrando inputs
        benedictBtnM.classList.remove("none");

        benedictInputM.classList.remove("none");
        benedictInputKg.classList.remove("none");

        currentCalculation = calculations[2]//Calculo atual = benedict

    }/*Removendo inputs(água), adicionando inputs(benedict)*/

    else if (currentInput == inputs[3] || currentInput == imcInputM || currentInput == imcInputKg) {
        imcInputM.classList.add("none");//Removendo inputs(imc)
        imcInputKg.classList.add("none");

        imcInputM.value = "";//Limpando inputs
        imcInputKg.value = "";

        currentInput = inputs[2];//Input Atual = benedict

        benedictBtnH.classList.remove("none");//Mostrando inputs(benedict)
        benedictBtnM.classList.remove("none");

        benedictInputM.classList.remove("none");
        benedictInputKg.classList.remove("none");

        currentCalculation = calculations[2]//Cálculo atual = benedict

    }/*Removendo inputs(imc), adicionando inputs(benedict)*/

    else {
        console.log("Ocorreu um erro.")
    }

});//Calculador de massa(Benedict)


button[2].addEventListener("click", () => {
    if (currentInput == calculatorInput) {
        calculatorInput.classList.add("none");//Removendo input(calculadora)
        calculatorInput.value = "";//Limpando input

        currentInput = inputs[3];//Input atual = imc
        imcInputM.classList.remove("none");//Mostrando inputs
        imcInputKg.classList.remove("none");

        currentCalculation = calculations[3]//Cálculo atual = imc

    }/*Mudando para inputs IMC*/

    else if (currentInput == waterInput) {
        waterInput.classList.add("none");//Removendo input(água)
        waterInput.value = "";//Limpando

        currentInput = inputs[3];//Input atual = imc
        imcInputM.classList.remove("none");//
        imcInputKg.classList.remove("none");

        currentCalculation = calculations[3]
    }/*Removendo input(água), adicionando inputs(imc)*/

    else if (currentInput == inputs[2] || currentInput == benedictInputM || currentInput == benedictInputKg || currentInput == benedictInputYOld) {
        benedictBtnH.classList.add("none");//Removendo inputs(benedict)
        benedictBtnM.classList.add("none");
        benedictInputYOld.classList.add("none")

        benedictInputM.classList.add("none")
        benedictInputKg.classList.add("none")

        benedictInputM.value = "";//Limpando inputs
        benedictInputKg.value = "";

        currentInput = inputs[3];//Input atual = imc
        imcInputM.classList.remove("none");//Mostrando inputs
        imcInputKg.classList.remove("none");

        currentCalculation = calculations[3]//Cálculo atual

    }/*Removendo inputs(benedict), adicionando inputs(imc)*/

    else if (currentInput == inputs[3] || currentInput == imcInputM || currentInput == imcInputKg) {
        imcInputM.classList.add("none");//Removendo inputs(imc)
        imcInputKg.classList.add("none");

        imcInputM.value = "";//Limpando inputs
        imcInputKg.value = "";

        currentInput = inputs[0];//Input atual = calculadora
        calculatorInput.classList.remove("none");//Mostrando input

        currentCalculation = calculations[0]//Cálculo atual = calculadora

    }/*Removendo inputs(IMC) e voltando para calculadora*/

    else {
        console.log("Ocorreu um erro.")
    }

});//Calculador de IMC


//Funções de cálculo
let calculating = 0; //Cálculo

function calculator() {

    let inputValue = calculatorInput.value;

    input = inputValue.replace("%", "/100");

    calculating = eval(input);

    result.textContent = calculating

};//Calculadora


function waterCalc() {

    calculating = 30 * currentInput.value;
    result.textContent = calculating + ("ml")

};//Calculadora de água


function benedictCalc() {

    if (gender == "H") {
        calculating = 66.5 + (13.75 * benedictInputKg.value) + (5.003 * benedictInputM.value) - (6.755 * benedictInputYOld.value)
    }

    else if (gender == "M") {
        calculating = 655.1 + (9.563 * benedictInputKg.value) + (1.850 * benedictInputM.value) - (4.676 * benedictInputYOld.value)
    }

    else {
        console.log("Ocorreu um erro.")
    };

    result.textContent = calculating

};//Calculadora de Benedict


function imcCalc() {

    calculating = imcInputKg.value / (imcInputM.value * imcInputM.value);
    result.textContent = ("IMC = ") + calculating.toFixed(2);

};//Calculadora de IMC


