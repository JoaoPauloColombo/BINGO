var number2 = Math.round((Math.random() * 25) + 1);


document.getElementById("num").innerText = number2;


for (var i = 0; i < 15; i++) {
    var newDiv = document.createElement("div");

    newDiv.innerText = number2;
    
    document.getElementById("num").appendChild(newDiv);
}