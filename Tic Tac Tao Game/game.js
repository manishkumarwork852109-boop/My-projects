// console.log("Hello World");

// MAKING A GAME

// Accesing components
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

// Game starter
let turnO = true; //player X, player O

// if these combination acurre then winner declere
const WinPatterns = [[0, 1, 2], 
                     [3, 4, 5], 
                     [6, 7, 8], 
                     [0, 3, 6], 
                     [0, 4, 8], 
                     [1, 4, 7], 
                     [2, 5, 8], 
                     [2, 4, 6]];

// Enable boxes and start game                   
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

// Game staring condition
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            // playerX
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// Disabling box after Game End
const disableBoxes = () => { 
    for (let box of boxes) {
        box.disabled = true;
    }
};
// Enable box after Pressing Reset button
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Showing the winning massage.
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Condition for win the Game.
const checkWinner = () => {
    for (let pattern of WinPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "", pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);

            };
        };
          
    };
};

// Add Event for Reset and Newgame Button.
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);