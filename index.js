// DETECTING BUTTON PRESS
var noOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i < noOfButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  addAnimation(buttonInnerHtml);
});}

// DETECTING KEYBOARD PRESS
document.addEventListener("keypress",function(){ makeSound(event.key);
  addAnimation(event.key);
});


// FUNCTION TO PLAY SOUND OF ONLY CONCERNED LETTER
function makeSound(key)
{
  switch(key){
    case "w":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash = new Audio("crash.mp3");
    crash.play();
    break;

    case "k":
    var kickBass = new Audio("kick-bass.mp3");
    kickBass.play();
    break;

    case "l":
    var snare = new Audio("snare.mp3");
    snare.play();
    break;

    default:
    console.log(this.innerHTML);
  }

}

function addAnimation(currentButton)
{
  document.querySelector("."+currentButton).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+currentButton).classList.remove("pressed");},100);
}
