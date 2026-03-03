// Calculate BMI

/*
Description:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(50, 1.75)); // Output in Kg: Underweight
console.log(bmi(70, 1.75)); // Output in Kg: Normal
console.log(bmi(100, 1.75)); // Output in Kg: Obese
