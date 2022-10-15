let quantCigarro_Dia = parseInt(prompt("Quantos cigarros fumados por dia?"));

var precoCigarro_unidade = 0.30;

let tempoFuma = parseInt(prompt("A quantos anos vc fuma? "));

var gastoDia = quantCigarro_Dia * precoCigarro_unidade;
var gastoTotal = (tempoFuma * 365) * gastoDia;

document.write("Voce gastou, com cigarro: $ ", gastoTotal);