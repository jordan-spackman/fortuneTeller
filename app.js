// let's change the heading when the page loads
//var heading = document.querySelector("h1");
//console.log("the heading is", heading);
//heading.innerHTML = "I CHING";

function getRandomInt(max) {
  return Math.floor( Math.random() * Math.floor(max) );
}

var theButton = document.querySelector("#button");
console.log("the button is", theButton);
theButton.onclick = function () {
  //change the hexagram image
  document.querySelector("#hex").style.backgroundImage = "url(1.png";

  //console.log("the random hex is", )

  // add an item to the history list when the button is clicked
  var hexHistory = document.querySelector("#historyList");
  console.log("the list is", hexHistory);
  var newItem = document.createElement("li");
  newItem.innerHTML = "This is a new list item.";
  hexHistory.appendChild(newItem);
};

fetch("https://api.myjson.com/bins/z1lsc").then(function (response) {
  response.json().then(function (data) {
    console.log("data loaded from server", data);
  });
});
