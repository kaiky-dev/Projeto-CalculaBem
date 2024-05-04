//Buscando elementos

//Visor
const result = document.getElementsByClassName("result")[0]; //Resultado

const calculatorInput = document.getElementsByClassName("calculatorInput")[0];//Calculator Input

const waterInput = document.getElementsByClassName("waterInput")[0];//Water Input

const benedictInput = document.getElementsByClassName("benedict");

const imcInput = document.getElementsByClassName("imcInput");//Imc Inputs
const imcInputM = imcInput[0];//Imc Input M
const imcInputKg = imcInput[1];//Imc Input Kg


const inputs = [calculatorInput, waterInput, benedictInput,imcInput];//Inputs

let currentInput = inputs[0];//Input Atual

//Botões
const button = document.getElementsByTagName("button");

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
imcInputM.addEventListener("click", () => currentInput = imcInputM);
imcInputKg.addEventListener("click", () => currentInput = imcInputKg);

//Calcular (=)
let calculations = [calculator, waterCalc, imc];//Cálculos

let currentCalculation = calculations[0];//Cálculo atual

button[21].addEventListener("click", () => currentCalculation());//=

//New calculator functions
button[0].addEventListener("click", () => {
    if (currentInput != inputs[1] && !(currentInput == inputs[3] || (currentInput == imcInputM || currentInput == imcInputKg))) {
        currentInput.classList.add("none"); //Removendo visualmente input atual
        currentInput.value = ""; //Limpando Input atual

        currentInput = inputs[1]; //Agora input atual é o da água
        currentInput.classList.remove("none"); //Mostrando input atual

        currentCalculation = calculations[1] //Cálculo atual é o da água

    }/*Mudando para input da água*/

    else if (currentInput == inputs[1]) {
        currentInput.classList.add("none"); //Sumindo com input(água)
        currentInput.value = ""; //Limpando input(água)

        currentInput = inputs[0]; //Input atual agora é calculadora
        currentInput.classList.remove("none"); //Mostrando Input

        currentCalculation = calculations[0] //Cálculo atual é calculadora

    }/*Removendo input(água) e voltando para calculadora*/

    else if (currentInput == inputs[3] || (currentInput == imcInputM || currentInput == imcInputKg)) {
        imcInputM.classList.add("none");//Sumindo com inputs(IMC)
        imcInputKg.classList.add("none");

        imcInputM.value = "";//Lipando inputs(IMC)
        imcInputKg.value = "";

        currentInput = inputs[1];//Agora input atual é água
        currentInput.classList.remove("none");//Mostrando Input

        currentCalculation = calculations[1]//Calculo atual é de água
        
    }/*Mudando para input água, se input atual for de IMC*/

    else {
        console.log("Ocorreu um erro.")
    }
});//Calculador de água


button[2].addEventListener("click", () => {
    if (currentInput != inputs[3] && currentInput != imcInputM && currentInput != imcInputKg) {
        currentInput.classList.add("none");
        currentInput.value = "";

        currentInput = inputs[3];
        imcInputM.classList.remove("none");
        imcInputKg.classList.remove("none");

        currentCalculation = calculations[2]
        
    }/*Mudando para inputs IMC*/

    else if (currentInput == inputs[3] || currentInput == imcInputM || currentInput == imcInputKg) {
        imcInputM.classList.add("none");
        imcInputKg.classList.add("none");

        imcInputM.value = "";
        imcInputKg.value = "";

        currentInput = inputs[0];
        currentInput.classList.remove("none");

        currentCalculation = calculations[0]

    }/*Removendo inputs(IMC) e voltando para calculadora*/

    else {
        console.log("Ocorreu um erro.")
    }
});//Calculador de IMC


//Funções de cálculo
let calculating; //Cálculo
function calculator() {
    calculating = eval(currentInput.value);
    result.textContent = calculating
};//Calculadora

function waterCalc() {
    calculating = 30 * currentInput.value;
    result.textContent = calculating + ("ml")
};//Calculadora de água

function imc() {
    calculating = imcInputKg.value / (imcInputM.value * imcInputM.value);
    result.textContent = ("IMC = ") + calculating.toFixed(2);
};//Calculadora de IMC

