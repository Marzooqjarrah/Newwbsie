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

var numofflowers=prompt("how many times you would like to see flowers?")

for (var i=0; i < numofflowers; i++)
{document.write("<img src='https://www.alfakher50g.com/wp-content/uploads/2020/09/purple-grape-600x600.png'>")}