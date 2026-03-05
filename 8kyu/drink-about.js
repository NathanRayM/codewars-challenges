// Description:

/* 
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

*/

function peopleWithAgeDrink(old) {
  if (old <= 13) {
    return "drink toddy";
  } else if (old <= 17) {
    return "drink coke";
  } else if (old <= 20) {
    return "drink beer";
  } else if (old <= 30) {
    return "drink whisky";
  }
}

console.log(peopleWithAgeDrink(13)); // Output: "drink toddy"
console.log(peopleWithAgeDrink(17)); // Output: "drink coke"
console.log(peopleWithAgeDrink(18)); // Output: "drink beer"
console.log(peopleWithAgeDrink(20)); // Output: "drink beer"
console.log(peopleWithAgeDrink(20)); // Output: "drink whisky"
