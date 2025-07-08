const box = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newbtn = document.querySelector(".newbtn");
const winContainer = document.querySelector(".win-container");
const msg = document.querySelector("#msg");
const draw = document.querySelector("#draw");




winnerFound= false;
let tunr0 = true;
let moveCount = 0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7], 
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

box.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("hi there");
        if(tunr0 === true){
            box.innerText = "O";
            tunr0 = false;
            
        
        }else{
            box.innerText = "X";
            tunr0 = true;
            
        }
        box.disabled = true;

        moveCount++;

        checkWinner()

        if (moveCount === 9 && !winnerFound) {
            gameDrawing();    // if no winner and all 9 moves done
        }
    })
})


const boxDisable =()=>{
    for(let b of box){
        b.disabled= true;
    }
}


const boxEnable =()=>{
    for(let b of box){
        b.disabled= false;
        b.innerText="";
    }
    tunr0 = true;
    winContainer.classList.add("hide");
    winnerFound = false;
    moveCount = 0;
}




const showWinner = (winner) =>{
   msg.innerText = `Congratulations, Winner is ${winner}`;
   winContainer.classList.remove("hide");
   boxDisable();
}


const checkWinner = () =>{
    for (pattern of winPatterns){
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("Winner", pos1val);
                winnerFound = true
                showWinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click", ()=>{
    boxEnable();
});
resetBtn.addEventListener("click", ()=>{
    boxEnable();
})


const gameDrawing = () => {
    msg.innerText = "It's a Draw!";
    winContainer.classList.remove("hide");
    boxDisable();
};