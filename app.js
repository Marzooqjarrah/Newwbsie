var x = 70
var y = 50
var sum = x + y
console.log(sum)
var welcome = prompt("what is your name")
alert("welcome to my website" + welcome)

var niceflowers = prompt("what is your favourite flower from this list (grape,olives,coconut)?")

while (niceflowers != "grape" && niceflowers != "olives" && niceflowers != "coconut") {
  niceflowers = prompt("you entered a wrong choise, Try again, please")
}
// consloe.log(niceflowers)


if (niceflowers == "grape") {
  document.write("<p>" + "nice! we have a plenty of tasty grapes ")
}

else if (niceflowers == "olives") {
  document.write("<p>" + "nice! we have a plenty of original olives")
}

else if (niceflowers == "coconut") {
  document.write("<p>" + "nice! we have a plenty of original coconut")
}
else {
  console.log("sorry, we didn't have your order")
}

function rating() {
  var numofstars = prompt("how many stras you would like to rate my website?")
  return numofstars;
}
var num = rating();
console.log(num)

for (var i = 0; i < num; i++) {
  document.write("<img src='https://static4.depositphotos.com/1001003/335/i/600/depositphotos_3350007-stock-photo-3d-star.jpg' />")
  
}


