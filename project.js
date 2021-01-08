const gameBoard = document.querySelector(".game-board");
const button=document.querySelector("#button");
const square = document.querySelectorAll(".square");

eventListeners();

function eventListeners() {
    gameBoard.addEventListener("click", play);
    button.addEventListener("click",restart);

}

const player1 = "x";
const player2 = "o";
let currentplayer = player1;
const gamelog = [];
let currentposition;


function play(e) {

    //elementin bgcolor'ını almaya yarıyor
    //style.backgroundColor sadece rengi ayarlamamıza yarıyor bize rengi vermiyor!!
    // let a=window.getComputedStyle(e.target).getPropertyValue('background-color')
    //     console.log(a);
    switchplayer(e.target)
    UI.fillsquare(e.target, currentplayer);

    e.preventDefault();

}

function switchplayer(target) {

    //if içine dolu olan karelere tıklabndığında oyuncu değişmemesi için bir şart yaz
    

    if ((window.getComputedStyle(target).getPropertyValue("background-color") != "rgb(0, 0, 255)") && (window.getComputedStyle(target).getPropertyValue("background-color") != "rgb(255, 0, 0)")){
        
    
    if (currentplayer == player2) {
            return (currentplayer = player1);
        } else {
            return (currentplayer = player2);
        }
}
  

}


function gameLog(currentplayer,currentposition){
    if (currentplayer=="x") {
        gamelog[currentposition]="blue"
    }
    else{
        gamelog[currentposition]="red";
    }
}

let count=0;

function checkWin(){
    
    
    let p=gamelog;
    if(p[0]!=undefined&&p[0]==p[1]&&p[1]==p[2]){
        
        showWinner(p[0]);
        count=0;
        return;
    }
    else if(p[3]!=undefined&&p[3]==p[4]&&p[4]==p[5]){
        
        showWinner(p[3]);
        count=0;
        return;
    }
   
    else if(p[6]!=undefined&&p[6]==p[7]&&p[7]==p[8]){
        
        showWinner(p[6]);
        count=0;
        return;
    }
    else if(p[0]!=undefined&&p[0]==p[3]&&p[3]==p[6]){
        
        showWinner(p[0]);
        count=0;
        return;
    }
    else if(p[1]!=undefined&&p[1]==p[4]&&p[4]==p[7]){
        
        showWinner(p[1]);
        count=0;
        return;
    }
    else if(p[2]!=undefined&&p[2]==p[5]&&p[5]==p[8]){
        
        showWinner(p[2]);
        count=0;
        return;
    }
    else if(p[2]!=undefined&&p[2]==p[4]&&p[4]==p[6]){
       
        showWinner(p[2]);
        count=0;
        return;
    }
    else if(p[0]!=undefined&&p[0]==p[4]&&p[4]==p[8]){
        
        showWinner(p[0]);
        count=0;
        return;
    }
    else if(count==9){
        console.log("winner is Tie");
        showWinner("tie");
        count=0;
        return;
    }
    
   
 
}



function restart(){
    for(let i=gamelog.length;i>0;i--){
        gamelog.pop();
    }
    square.forEach(element => {
        element.className="square";
        
    });
    winnerScreen.style.display="none";
    currentplayer=player1;
   
}