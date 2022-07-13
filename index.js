var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var number=this.innerHTML;
  makeSound(number);
  buttonAnimation(number);
  /*
  switch (number) {
    case "w":
    var music=new Audio("sounds/tom-1.mp3");
    music.play();
    break;

    case "a":
    var musi=new Audio("sounds/tom-2.mp3");
    musi.play();
    break;

    case "s":
    var music=new Audio("sounds/tom-3.mp3");
    music.play();
    break;

    case "d":
    var music=new Audio("sounds/tom-4.mp3");
    music.play();
    break;

    case "j":
    var music=new Audio("sounds/snare.mp3");
    music.play();
    break;

    case "k":
    var music=new Audio("sounds/crash.mp3");
    music.play();
    break;

    case "l":
    var music=new Audio("sounds/kick-bass.mp3");
    music.play();
    break;


    default:alert("not valid");
    break;
  }
  */
});
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(number){

    switch (number) {
      case "w":
      var music=new Audio("sounds/tom-1.mp3");
      music.play();
      break;

      case "a":
      var musi=new Audio("sounds/tom-2.mp3");
      musi.play();
      break;

      case "s":
      var music=new Audio("sounds/tom-3.mp3");
      music.play();
      break;

      case "d":
      var music=new Audio("sounds/tom-4.mp3");
      music.play();
      break;

      case "j":
      var music=new Audio("sounds/snare.mp3");
      music.play();
      break;

      case "k":
      var music=new Audio("sounds/crash.mp3");
      music.play();
      break;

      case "l":
      var music=new Audio("sounds/kick-bass.mp3");
      music.play();
      break;


      default:alert("not valid");
      break;
    }
  }

  function buttonAnimation(animation){
    var her=document.querySelector("."+animation);
    her.classList.add("pressed");

    setTimeout(function(){
      her.classList.remove("pressed");
    },100);

  }
