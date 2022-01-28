var start=false;
var player1=true;
let counter=0;
let finish=false;

$("#result").hide();

function playerSwitch(){
  player1=!player1;
  counter++;
  checkDraw();
  playerInfo();
  checkSequence();
}

function playerInfo(){
  if(player1){
    $("#player-info").html("Player 1 Turn");
  }else{
    $("#player-info").html("Player 2 Turn");
  }
}

function gameResult(result){
  finish=true;

  if(finish === true){
    let array1=["#b1","#b2","#b3","#b4","#b5","#b6","#b7","#b8","#b9"]
    for (let i=0;i<array1.length-1;i++){
      if(!$(array1[i]).hasClass("cross") || !$(array1[i]).hasClass("check")){
        $(array1[i]).disabled=true;
      }
    }
  }

  setTimeout(function(){
    $("#result").show();
    $("#winner").html(result);
  },300)
}

function checkDraw(){
  if (counter === 9){
    setTimeout(function(){
      $("#result").show();
      $("#winner").html("GAME DRAW");
    },300)
  }
}

function checkSequence(){
  //Check Sequence for check sign
  if($("#b1").hasClass("check") && $("#b2").hasClass("check") && $("#b3").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

  if($("#b4").hasClass("check") && $("#b5").hasClass("check") && $("#b6").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

  if($("#b7").hasClass("check") && $("#b8").hasClass("check") && $("#b9").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

  if($("#b1").hasClass("check") && $("#b4").hasClass("check") && $("#b7").hasClass("check")){
    gameResult("player 1 Won the game");
  }

  if($("#b2").hasClass("check") && $("#b5").hasClass("check") && $("#b8").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

  if($("#b3").hasClass("check") && $("#b6").hasClass("check") && $("#b9").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

  if($("#b1").hasClass("check") && $("#b5").hasClass("check") && $("#b9").hasClass("check")){
    gameResult("Player 1 has Won.")
  }

  if($("#b3").hasClass("check") && $("#b5").hasClass("check") && $("#b7").hasClass("check")){
     gameResult("Player 1 has Won.")
  }

//Check Sequence for cross sign
  if($("#b1").hasClass("cross") && $("#b2").hasClass("cross") && $("#b3").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b4").hasClass("cross") && $("#b5").hasClass("cross") && $("#b6").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b7").hasClass("cross") && $("#b8").hasClass("cross") && $("#b9").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b1").hasClass("cross") && $("#b4").hasClass("cross") && $("#b7").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b2").hasClass("cross") && $("#b5").hasClass("cross") && $("#b8").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b3").hasClass("cross") && $("#b6").hasClass("cross") && $("#b9").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }

  if($("#b1").hasClass("cross") && $("#b5").hasClass("cross") && $("#b9").hasClass("cross")){
    gameResult("player 1 Won the game");
  }

  if($("#b3").hasClass("cross") && $("#b5").hasClass("cross") && $("#b7").hasClass("cross")){
     gameResult("Player 2 has Won.")
  }
}

$("#new-game").click(function(){
  location.reload();
});

$("#b1").click(function(){
  if($("#b1").hasClass("cross") || $("#b1").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b1").addClass("check");
      $("#b1").disabled=true;
      playerSwitch();
    }else{
      $("#b1").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b2").click(function(){
  if($("#b2").hasClass("cross") || $("#b2").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b2").addClass("check");
      playerSwitch();
    }else{
      $("#b2").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b3").click(function(){
  if($("#b3").hasClass("cross") || $("#b3").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b3").addClass("check");
      playerSwitch();
    }else{
      $("#b3").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b4").click(function(){
  if($("#b4").hasClass("cross") || $("#b4").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b4").addClass("check");
      playerSwitch();
    }else{
      $("#b4").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b5").click(function(){
  if($("#b5").hasClass("cross") || $("#b5").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b5").addClass("check");
      playerSwitch();
    }else{
      $("#b5").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b6").click(function(){
  if($("#b6").hasClass("cross") || $("#b6").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b6").addClass("check");
      playerSwitch();
    }else{
      $("#b6").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b7").click(function(){
  if($("#b7").hasClass("cross") || $("#b7").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b7").addClass("check");
      playerSwitch();
    }else{
      $("#b7").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b8").click(function(){
  if($("#b8").hasClass("cross") || $("#b8").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b8").addClass("check");
      playerSwitch();
    }else{
      $("#b8").addClass("cross");
      playerSwitch();
    }
  }
});

$("#b9").click(function(){
  if($("#b9").hasClass("cross") || $("#b9").hasClass("check")){
    //do nothing
  } else if (finish !== true) {
    if(player1){
      $("#b9").addClass("check");
      playerSwitch();
    }else{
      $("#b9").addClass("cross");
      playerSwitch();
    }
  }
});
