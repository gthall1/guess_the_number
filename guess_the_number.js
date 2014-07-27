var number = Math.floor((Math.random() * 100) + 1);

var name = prompt("What is your name?");

/* alert("Your name is " + name); */

var userNumber = prompt("Pick a number between 1 and 100");
if (userNumber === number){
  alert("you win!");
} else {
  alert("you lose! the number was " + number);
}

