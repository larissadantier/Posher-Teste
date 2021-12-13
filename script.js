// Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.
function isSubsequent() {
  const inputFirst = document
    .getElementById("firstArrayA")
    .value.split(" ")
    .map(Number);

  const inputSecond = document
    .getElementById("secondArrayA")
    .value.split(" ")
    .map(Number);

  const sequence = (arrayA, arrayB) => {
    let filterArray = arrayA.filter((text) => arrayB.includes(text));

    return filterArray.toString() === arrayB.toString();
  };

  return alert(`Resultado: [${sequence(inputFirst, inputSecond)}]`);
}

// Dado um array de strings não vazio, remove os dados duplicados em sequência.
function removeDuplicates() {
  const inputDuplicates = document
    .getElementById("duplicateArray")
    .value.split(" ")
    .map(String);

  const arrayCleanDuplicates = [];

  for (let i = 0; i < inputDuplicates.length; i++) {
    if (inputDuplicates[i + 1] !== inputDuplicates[i]) {
      arrayCleanDuplicates.push(inputDuplicates[i]);
    }
  }

  return alert(`Resultado: [${arrayCleanDuplicates}]`);
}

//Dado um array de strings não vazio, retorna um array de booleans indicando se a string é ou não um palíndromo.
function verifyPalindromes() {
  const inputPalindromo = document
    .getElementById("palindromoArray")
    .value.split(" ")
    .map(String);

  const resultNewArray = [];

  inputPalindromo.forEach((item) => {
    resultNewArray.push(logicCheckPalíndromo(item));
  });

  return alert(`Resultado: [${resultNewArray}]`);
}

function logicCheckPalíndromo(word) {
  return word.split("").reverse().join("") === word;
}
