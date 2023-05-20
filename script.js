let startButton = document.getElementById("btnStart");
let userInput = document.getElementById("shape");
let goButton = document.getElementById("btnGo");
let userRes = document.getElementById("resUser");
let pcRes = document.getElementById("resPC");
let pcPoints = document.getElementById("pc");
let userPoints = document.getElementById ("user");
let choicePC = document.getElementById("pcChoise");
let result = document.getElementById("results");
let popup = document.getElementById("popUp");
let btn = document.getElementById("btn");
let lastMsg = document.getElementById("lastMsg");
let resBlock = document.getElementById("resBlock");
let user = 0, pc = 0, randNumber = 0;
let userChoice = "", pcChoice = "";


startButton.onclick = function() {
    user = pc = 0;
    startButton.disabled = true;
    userInput.disabled = false;
    goButton.disabled = false;
    pcPoints.innerHTML = pc;
    userPoints.innerHTML = user;
    resBlock.hidden = false;
//     userRes.hidden = false;
//     pcRes.hidden = false;
}

btn.onclick = function() {
    popup.classList.remove("open-popup");
}

goButton.onclick = function() {
    userChoice = userInput.value;
    randNumber = Math.floor(Math.random() * 3);
    switch (randNumber) {
        case 0: pcChoice = "rock"; break;
        case 1: pcChoice = "scissors"; break;
        case 2: pcChoice = "paper"; break;
    }
    choicePC.value = pcChoice;
    if (userChoice == pcChoice)
    {
        userPoints.innerHTML = user;
        pcPoints.innerHTML = pc;
    }
    else if (userChoice == "rock" && pcChoice == "scissors" ||
    userChoice == "scissors" && pcChoice == "paper" ||
    userChoice == "paper" && pcChoice == "rock")
    {
        user++;
        userPoints.innerHTML = user;
    }
    else
    {
        pc++;
        pcPoints.innerHTML = pc;
    }
    if (user > 9 || pc > 9)
    {
        gameOver();
    }
}

const gameOver = () => {
    if (user > pc) {
        lastMsg.innerHTML = "you win!";
        results.innerHTML = `result: ${user}:${pc}`;
    }
    else if (user < pc) {
        lastMsg.innerHTML = "you lose!";
        results.innerHTML = `result: ${user}:${pc}`;
    }
    else {
        lastMsg.innerHTML = "draw!";
    }


    popup.classList.add("open-popup");
    startButton.disabled = false;
    userInput.disabled = true;
    goButton.disabled = true;
}