// Challenge 1: Your Age in Days
function ageInDays() {
  var birthYear = prompt("Hello friend, what year were you born?");
  var ageInDays = (2022 - birthYear) * 365;
  console.log(ageInDays);
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old!"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

function generateCat() {
  var img = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  img.src =
    "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(img);
}

function resetCatGen() {
  document.getElementById("flex-cat-gen").innerHTML = "";
}
