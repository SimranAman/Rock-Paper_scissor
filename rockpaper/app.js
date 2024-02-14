let myScore =0;
let compScore=0;




// to genereate computer choice
function genCompChoice(){
   const comChoices= ["rock","paper", "scissor"];
  const ranIdx= Math.floor(Math.random()*3);
  return comChoices[ranIdx];
}


function showWinner(UserWinner){
    if(UserWinner){
      myScore++;
      const Userscore = document.querySelector("#user-score");
      Userscore.innerText = myScore;
       msg.innerText = "You win";
       msg.style.backgroundColor= "green";
    }else{
        compScore++;
        const Compscore = document.querySelector("#comp-score");
        Compscore.innerText= compScore;
        msg.innerText = "Computer win"
        msg.style.backgroundColor= "red";
    }
}

// play game function
function gamePlay(choice){
const CompChoice= genCompChoice();
if(choice===CompChoice)
{ console.log("match is draw")
 msg.innerText = "Game is draw, please play again";
 msg.style.backgroundColor= "rgb(240, 243, 245)";
}else{

let UserWinner= true;
if(choice==="rock"){
    UserWinner= CompChoice=== "paper"? false : true;
} else if (choice==="paper"){
    UserWinner= CompChoice=== "scissor"? false : true;
}else if (choice==="scissor"){
    UserWinner= CompChoice=== "rock"? false : true;
}
showWinner(UserWinner);
}
};

// generating user choices 
const rock = document.querySelector("#rock");
const paper = document.getElementById("paper");
const scissor = document.querySelector("#scissor");
rock.onclick = function() {
    choice= rock.getAttribute("id");
   gamePlay(choice);
}
paper.onclick = () => {
    choice= paper.getAttribute("id");
    gamePlay(choice);
}
scissor.onclick = function(click){
    choice= scissor.getAttribute("id");
    gamePlay(choice);
}


