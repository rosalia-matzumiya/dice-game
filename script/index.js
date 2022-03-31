var firstWord = document.querySelector(".firstWord"),
  secondWord = document.querySelector(".secondWord"),
  btn = document.querySelector(".btn"),
  inputWrapper = document.querySelector(".inputWrapper"),
  inputField =

    // EVENTS ------------

    // event listener for click
    btn.addEventListener("click", changeText);

// event listener for Enter
inputField.addEventListener("keypress", function (e) {
  var key = e.which || e.keycode;
  if (key === 13) changeText();
});

// event listener to Anime Input
inputField.addEventListener("focus", animeInput);
inputField.addEventListener("focusout", removeAnimeInput);

// FUNCTIONS ------------

// To Change text
function changeText() {
  var inputText1 = document.querySelector(".inputText").value.split(" "),
    inputText = document.querySelector(".inputText").value;

  if (inputText != "") {
    secondWord.innerText = "";

    for (var i = 0; i < inputText1.length; i++) {

      if (inputText1.length == 1) {
        firstWord.innerText = inputText1[0];
        secondWord.innerText = "";
      } else {
        if (i == 0) continue
        firstWord.innerText = inputText1[0];
        secondWord.innerText += " " + inputText1[i];
      }
    }
  } else {
    alert("Please enter a player name");
  }

  //if input is leave empty
}

// To anime the yellow element
function animeInput() {
  inputWrapper.classList.add("active");
}

function removeAnimeInput() {
  inputWrapper.classList.remove("active");
}
