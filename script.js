    const numbers = [];
    const elements = document.querySelectorAll(".grid-item");

    for (let i = 0; i < 15; i++) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 25) + 1;
        } while (numbers.includes(randomNumber));
        
        numbers.push(randomNumber);
        elements[i].textContent = randomNumber;
}