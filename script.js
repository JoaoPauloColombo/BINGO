// var numbers = [];

// // Loop para gerar 15 números aleatórios diferentes
// for (var i = 0; i < 15; i++) {
//     // Gera um número aleatório
//     var randomNumber;
//     do {
//         randomNumber = Math.round((Math.random() * 25) + 1);
//     } while (numbers.includes(randomNumber));

//     numbers.push(randomNumber);


//     var newDiv = document.createElement("div");


//     newDiv.innerText = randomNumber;

//     document.getElementById("num").appendChild(newDiv);
// }

const random = document.getElementById("random");

let number = Math.round((Math.random() * 25) + 1);
random0.textContent = number;
random1.textContent = number;
random2.textContent = number;
random3.textContent = number;
random4.textContent = number;
random5.textContent = number;
random6.textContent = number;
random7.textContent = number;
random8.textContent = number;
