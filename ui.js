const winnerScreen=document.querySelector(".popup");
class UI {
  static fillsquare(target, currentplayer) {
   
  

    
        // window.getComputedStyle(target).getPropertyValue('background-color')!="rgb(255, 0, 0)" && window.getComputedStyle(target).getPropertyValue('background-color')!="rgb(0, 0, 255)"
    //   target.innerHTML != '<i class="fas fa-times"></i>' &&
    //   target.innerHTML != '<i class="far fa-circle"></i>'
    
    
    if ((window.getComputedStyle(target).getPropertyValue("background-color") != "rgb(0, 0, 255)") && (window.getComputedStyle(target).getPropertyValue("background-color") != "rgb(255, 0, 0)")){
      count++;
  
      if (currentplayer == "x") {
            target.classList.add("blue");
            
            gameLog(currentplayer,target.id);
          // target.innerHTML = '<i class="fas fa-times"></i>';
          
          
        } else {
            target.classList.add("red")

          // target.innerHTML = '<i class="far fa-circle"></i>';
          gameLog(currentplayer,target.id);
        }
      }
      checkWin();
    }    
   

   
      
  
}


function showWinner(position){
   
    const cbody=document.querySelector(".card-body")
    cbody.innerHTML=`<div class="card-body">
    <div class="alert alert-primary" role="alert">
     <h4>The Winner is ${position.toUpperCase()} </h4>
    </div>`
     
     winnerScreen.style.display="flex";

}


