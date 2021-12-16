let initialValue = "X";
let flag = 1;
let set = [0,0,0,0,0,0,0,0,0];
let value;
let winner;

function checkForBeginning(){
  return (flag==1)?true:false;
}

function madeAMove(e, index){
  let checkBeginning = checkForBeginning();
  if(checkBeginning){
    flag = 0;
    e.target.innerHTML = initialValue;
    value = initialValue;
    set[index] = 1;
  }
  else{
    value = (value=="X")?"O":"X";
    if(set[index]==0){
      e.target.innerHTML = value;
      set[index] = 1;
    }
  }
}

let topLeftBlock = document.querySelector(".block-top-left");
let topMiddleBlock = document.querySelector(".block-top-middle");
let topRightBlock = document.querySelector(".block-top-right");
let middleLeftBlock = document.querySelector(".block-middle-left");
let middleBlock = document.querySelector(".block-middle");
let middleRightBlock = document.querySelector(".block-middle-right");
let bottomLeftBlock = document.querySelector(".block-bottom-left");
let bottomMiddleBlock = document.querySelector(".block-bottom-middle");
let bottomRightBlock = document.querySelector(".block-bottom-right");
let playAgainBtn = document.querySelector(".play-again-button");
let playAgainButton = document.querySelector(".play-again-btn");

function winnerDisplay(blockValue){
  set = [1,1,1,1,1,1,1,1,1];
  winner = blockValue;
  winnerBlock  = document.querySelector(".winner-block");
  winnerBlock.style.display = "block";
  document.querySelector(".winner-block-content").innerHTML = winner;
}

function refresh(){
  set = [0,0,0,0,0,0,0,0,0];
  topLeftBlock.innerHTML = "";
  topMiddleBlock.innerHTML = "";
  topRightBlock.innerHTML = "";
  middleLeftBlock.innerHTML = "";
  middleBlock.innerHTML = "";
  middleRightBlock.innerHTML = "";
  bottomLeftBlock.innerHTML = "";
  bottomMiddleBlock.innerHTML = "";
  bottomRightBlock.innerHTML = "";
  winnerBlock  = document.querySelector(".winner-block");
  winnerBlock.style.display = "none";
  drawBlock  = document.querySelector(".draw-block");
  drawBlock.style.display = "none";
}

playAgainBtn.addEventListener('click', ()=>{
  refresh();
});

playAgainButton.addEventListener('click', ()=>{
  refresh();
});


function checkWinner(){
  let topLeftBlockValue = topLeftBlock.innerHTML;
  let topMiddleBlockValue = topMiddleBlock.innerHTML;
  let topRightBlockValue = topRightBlock.innerHTML;
  let middleLeftBlockValue = middleLeftBlock.innerHTML;
  let middleBlockValue = middleBlock.innerHTML;
  let middleRightBlockValue = middleRightBlock.innerHTML;
  let bottomLeftBlockValue = bottomLeftBlock.innerHTML;
  let bottomMiddleBlockValue = bottomMiddleBlock.innerHTML;
  let bottomRightBlockValue = bottomRightBlock.innerHTML;
  if(topLeftBlockValue == topMiddleBlockValue && topMiddleBlockValue == topRightBlockValue && topLeftBlockValue!=""){
    winnerDisplay(topLeftBlockValue);
  }
  else if(middleLeftBlockValue == middleBlockValue && middleBlockValue == middleRightBlockValue && middleLeftBlockValue!=""){
    winnerDisplay(middleLeftBlockValue);
  }
  else if(bottomLeftBlockValue == bottomMiddleBlockValue && bottomMiddleBlockValue == bottomRightBlockValue && bottomLeftBlockValue!=""){
    winnerDisplay(bottomLeftBlockValue);
  }
  else if(topLeftBlockValue == middleLeftBlockValue && middleLeftBlockValue == bottomLeftBlockValue && topLeftBlockValue!=""){
    winnerDisplay(topLeftBlockValue);
  }
  else if(topMiddleBlockValue == middleBlockValue && middleBlockValue == bottomMiddleBlockValue && topMiddleBlockValue!=""){
    winnerDisplay(topMiddleBlockValue);
  }
  else if(topRightBlockValue == middleRightBlockValue && middleRightBlockValue == bottomRightBlockValue && topRightBlockValue!=""){
    winnerDisplay(topRightBlockValue);
  }
  else if(topLeftBlockValue == middleBlockValue && middleBlockValue == bottomRightBlockValue && topLeftBlockValue!=""){
    winnerDisplay(topLeftBlockValue);
  }
  else if(topRightBlockValue == middleBlockValue && middleBlockValue == bottomLeftBlockValue && topRightBlockValue!=""){
    winnerDisplay(topRightBlockValue);
  }
  let hasLost = set.every((item)=>{
      return item == 1;
  });

  winnerBlock  = document.querySelector(".winner-block");

  if(hasLost && winnerBlock.style.display == "none"){
    document.querySelector(".draw-block").style.display = "block";
  }
}

topLeftBlock.addEventListener('click', (e) => {
  madeAMove(e, 0);
  checkWinner();
});

topMiddleBlock.addEventListener('click', (e) => {
  madeAMove(e, 1);
  checkWinner();
});

topRightBlock.addEventListener('click', (e) => {
  madeAMove(e, 2);
  checkWinner();
});

middleLeftBlock.addEventListener('click', (e) => {
  madeAMove(e, 3);
  checkWinner();
});

middleBlock.addEventListener('click', (e) => {
  madeAMove(e, 4);
  checkWinner();
});

middleRightBlock.addEventListener('click', (e) => {
  madeAMove(e, 5);
  checkWinner();
});

bottomLeftBlock.addEventListener('click', (e) => {
  madeAMove(e, 6);
  checkWinner();
});

bottomMiddleBlock.addEventListener('click', (e) => {
  madeAMove(e, 7);
  checkWinner();
});

bottomRightBlock.addEventListener('click', (e) => {
  madeAMove(e, 8);
  checkWinner();
});
