'use strict';

//works in terminal
//for Chrome, replace lines X with:
//let fahrenheit = 
console.log("what is the temperature today in Fahrenheit?");

let fahrenheit = readline;

let celsius = ((fahrenheit * (9/5)) + 32);

let kelvin = celsius + 273;

console.log(`${fahrenheit}° Fahrenheit = ${celsius}° Celsius = ${kelvin}° Kelvin`)
