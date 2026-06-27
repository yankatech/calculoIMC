function calcularIMC(){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let resultado = document.getElementById("resultado");


    if(peso === "" || altura === ""){
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }


    let imc = peso / (altura * altura);

    let classificacao = "";


    if(imc < 18.5){
        classificacao = "Abaixo do peso";

    } else if(imc < 25){
        classificacao = "Peso normal";

    } else if(imc < 30){
        classificacao = "Sobrepeso";

    } else {
        classificacao = "Obesidade";

    }

    resultado.innerHTML = 
    `
    Seu IMC é: <strong>${imc.toFixed(2)}</strong>
    <br>
    Classificação: ${classificacao}
    `;

}