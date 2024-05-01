let boxes = document.querySelectorAll(".box");
let count = 0
let messagecontainer= document.querySelector(".container");
let msg = document.querySelector("#winner");
let restart = document.querySelector("#resetgame");
let newgame = document.querySelector("#newgame");
newgame.addEventListener("click",()=>{
  resetgame();
})
var winningpattern = [
[0,3,6],
[0,1,2],
[1,4,7],
[3,4,5],
[2,5,8],
[6,7,8],
[0,4,8],
[2,4,6],
];
var turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      
      if(turn0===true){
        turn0=false;
        box.innerText="O";
      }
      else{
        turn0=true;
        box.innerText='X';

      }
      box.disabled=true;
      count++;
      let winner = iswinner();
      if(count ===9&&!winner){
        gamedraw();
      }
    })
})
function disablebx(){
  for(box of boxes){
    box.disabled= true;
    messagecontainer.classList.remove("hide")
  }
}
function enablebx(){
  for(box of boxes){
    box.disabled= false;
  }
}
function gamedraw(){
  msg.innerText="game Draw";
disablebx();
}


 function iswinner(){
    for(let pattern of winningpattern){

        var pos1 = boxes[pattern[0]].innerText;
        var pos2 = boxes[pattern[1]].innerText;
        var pos3 = boxes[pattern[2]].innerText;
        
    
    if(pos1!=""&&pos2!=""&&pos3!=""){
     if(pos1===pos2&&pos2===pos3){
        showWinner(pos1);
        
        disablebx();
      }
    }
  }
};


function resetgame(){
  turn0 = true;
  count =0;
  enablebx();
  messagecontainer.classList.add("hide");
  for(box of boxes){
    box.innerText=""
  }
}
function showWinner(winner){
  msg.innerText= `Winner is ${winner}`
  messagecontainer.classList.remove("hide");
  
}

restart.addEventListener("click",()=>{
resetgame();
})
