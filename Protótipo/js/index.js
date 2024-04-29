// Visor
//Buscando elementos
const result = document.getElementsByClassName("result")[0]; //Resultado
const display = document.getElementsByClassName("display"); //Inputs 
let currentDisplay = display[0] //Input Atual (calculadora)

// Buscando botões
const button = document.getElementsByTagName("button");

// Botões dos calculos de saúde
let condicion = true; //Condição para o if
let currentCalc = calculation; //Calculo atual

button[0].addEventListener("click", () => {

    if (condicion) {
        display[0].classList.add("none"); //Remove visualmente o input da calculadora
        currentDisplay.value = ""; //Limpa o input atual (calculadora)

        display[1].classList.remove("none"); //Adiciona visualmente o input da água
        currentCalc = waterCalc; //Calculo atual vira o da água
        currentDisplay = display[1]; //Input atual agora é da água
        
        button[21].addEventListener("click", currentCalc); //Botão de calcular (=)
        
        condicion = false; //Muda o valor da condição

    } //Condição para remover o input(display) da calculadora e adicionar o da água

    else if (condicion == false) {
        display[1].classList.add("none"); //Remove visualmente o input da água
        currentDisplay.value = ""; //Limpa o input atual (água)

        display[0].classList.remove("none"); //Adiciona visualmente o input da calculadora
        currentCalc = calculation; //Calculo atual vira de calculadora
        currentDisplay = display[0]; //Input atual agora é o da calculadora

        button[21].addEventListener("click", currentCalc); //Botão de calcular (=)

        condicion = true; //Muda o valor da condição

    } //Condição para remover o input(display) da água e adicionar o da calculadora

    else{
        console.log("Porra.. Ocorreu um erro.")
    } //Se ocorrer algum erro nas condições

}) //Botão do calculo da água e sua função

// button[1]
// button[2]

//Botões de limpar input
button[3].addEventListener("click", () => currentDisplay.value = ""); //AC
button[4].addEventListener("click", () => currentDisplay.value = currentDisplay.value.slice(0, -1));//DEL

//Botões de numeros e operações
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

button[21].addEventListener("click", currentCalc); //=


//Funções
let calc; //Calculo

function calculation() {
    calc = eval(currentDisplay.value); //Calculo
    console.log(calc);
    result.textContent = calc //Mostrando resultado

}; //Calculadora normal

function waterCalc() {
    calc = currentDisplay.value * 30 + ("ml"); //Calculo
    console.log(calc);
    result.textContent = calc //Mostrando resultado
} //Calculadora de água

