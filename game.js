var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Example: dice1.png - dice6.png
var randomImageSource = "images/"+randomDiceImage;


var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // Example: dice1.png - dice6.png
var randomImageSource2 = "images/"+randomDiceImage2;


document.querySelector("#play-video").addEventListener('click',function(){

    game();

});


function game(){
    document.querySelector(".img1").setAttribute("src",randomImageSource); 
  document.querySelector(".img2").setAttribute("src",randomImageSource2); 

  if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
    document.querySelector("body").style.backgroundColor = "tan";
  }
    else if(randomNumber1 > randomNumber2){

        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
        document.querySelector("body").style.backgroundColor = "green";
    }
    else{
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
    document.querySelector("body").style.backgroundColor = "cadetblue";
  }
}


