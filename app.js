
function getRandomInt(max) {
  return Math.floor( Math.random() * Math.floor(max) );
}

var savedData = null;
var randoHex = null;

fetch("https://api.myjson.com/bins/e4v94").then(function (response) {
    response.json().then(function (data) {
      console.log("data loaded from server", data);
    savedData = data;
    console.log("data from 'savedData' variable", savedData);

    });
  });

var theButton = document.querySelector("#button");
console.log("the button is", theButton);

theButton.onclick = function () {
  //change the hexagram image to random hex
  var rando = getRandomInt(11);
  console.log("random int was", rando);
  randoHexFilename = savedData[rando].fileName;
  console.log("the random hex filename is", randoHexFilename);
  document.querySelector("#hex").style.backgroundImage = randoHexFilename;

  // add an item to the history list when the button is clicked
  var hexHistory = document.querySelector("#historyList");
  console.log("the list is", hexHistory);
  var newItem = document.createElement("li");
  newItem.innerHTML = savedData[rando].hexName;
  hexHistory.appendChild(newItem);
  //add time and date
};