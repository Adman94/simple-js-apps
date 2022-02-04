// Your Age in Days
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

// Cat Generator
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

// Rock, Paper, Scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log("Computer choice: ", botChoice);
  results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
  console.log(results);
  message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
  console.log(message);
  rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(yourChoice, botChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // let's remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[yourChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

  messageDiv.innerHTML =
    "<h1 style = 'color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function resetRps() {
  document.getElementById("flex-box-rps-div").innerHTML = "";
  var rpsDiv = document.getElementById("flex-box-rps-div");
  var resetHtml = [
    '<img id="rock" src="http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png" alt="" height="150" width="150" onclick="rpsGame(this)">',
    '<img id="paper" src="http://images.clipartpanda.com/paper-clipart-nexxuz-Loose-Leaf-Paper.png" alt="" height="150" width="150" onclick="rpsGame(this)">',
    '<img id="scissors" src="https://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg" alt="" height="150" width="150" onclick="rpsGame(this)"></img>',
  ];

  resetHtml.forEach((e) => {
    rpsDiv.innerHTML += e;
  });
}
