var numbers = [];

// Loop para gerar 15 números aleatórios diferentes
for (var i = 0; i < 15; i++) {
    // Gera um número aleatório
    var randomNumber;
    do {
        randomNumber = Math.round((Math.random() * 25) + 1);
    } while (numbers.includes(randomNumber));

    numbers.push(randomNumber);


    var newDiv = document.createElement("div");


    newDiv.innerText = randomNumber;

    document.getElementById("num").appendChild(newDiv);
}