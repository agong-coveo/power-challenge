function setVolume() {
  var myAudio = document.getElementById("player");
  myAudio.volume = 0.05;
}

function playAudio() {
  document.getElementById("player").play();
  var pfp = document.querySelector(".CoveoImageFieldValue img");
  pfp.className += "shake";

  setTimeout(function() {
    pfp.classList.remove('shake');
  }, 1000);
}
