var buttonList = document.querySelectorAll(".drum");

for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    buttonAnimation(buttonInnerHtml);
    switch (buttonInnerHtml) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      default:
        console.log(buttonInnerHtml);
    }
  });
}

function gotClicked() {
  audio.play();
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  buttonAnimation(event.key);
  switch (event.key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
});

function buttonAnimation(currentKey) {
  var activateButton = document.querySelector("." + currentKey);

  activateButton.classList.add("pressed");

  setTimeout(function () {
    activateButton.classList.remove("pressed");
  }, 200);
}
