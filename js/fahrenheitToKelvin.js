'use strict';

let fahrenheit = prompt("what is the temperature today in Fahrenheit?");

let celsius = ((fahrenheit * (9/5)) + 32);

let kelvin = celsius + 273;

console.log(`${fahrenheit}° Fahrenheit = ${celsius}° Celsius = ${kelvin}° Kelvin`)
