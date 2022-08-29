let decisao = true,
  resultados = [],
  index = 0;

function Somar(numberOne, numberTwo) {
  return parseInt(numberOne) + parseInt(numberTwo);
}

function Subtracao(numberOne, numberTwo) {
  return parseInt(numberOne) - parseInt(numberTwo);
}
function Multiplicar(numberOne, numberTwo) {
  return parseInt(numberOne) * parseInt(numberTwo);
}
function Divisor(numberOne, numberTwo) {
  return parseInt(numberOne) / parseInt(numberTwo);
}

function Historico(resultados) {
  return resultados;
}

while (decisao) {
  let numberOne = prompt("Digite o primeiro valor");
  let numberTwo = prompt("Digite o segundo valor");

  let choice = prompt(
    "Qual operação você deseja realizar ? \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão"
  );

  if (choice === "1") {
    console.log(`A Soma dos valores é ${Somar(numberOne, numberTwo)}`);
    resultados[index] = Somar(numberOne, numberTwo);
  }

  if (choice === "2") {
    console.log(`A Subtração dos valores é ${Subtracao(numberOne, numberTwo)}`);
    resultados[index] = Subtracao(numberOne, numberTwo);
  }

  if (choice === "3") {
    console.log(
      `A Multiplicação dos valores é ${Multiplicar(numberOne, numberTwo)}`
    );
    resultados[index] = Multiplicar(numberOne, numberTwo);
  }
  if (choice === "4") {
    console.log(`A Divisão dos valores é ${Divisor(numberOne, numberTwo)}`);
    resultados[index] = Divisor(numberOne, numberTwo);
  }

  decisao = prompt("Deseja continuar ?");

  if (decisao == "nao") {
    console.log(`O histórico dos resultados é: ${Historico(resultados)}`);
    decisao = false;
  } else {
    index++;
  }
}
