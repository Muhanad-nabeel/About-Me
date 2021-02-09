
'use strict';

prompt('what\'s your name');
let age = prompt('Are you between 20-25? y/n');
let uni = prompt('DO you have bachelor\'s degree? y/n ');
let country = prompt('Are you from amman? y/n');
let visit = prompt('Have you ever visited us before? Y/N');
let car = prompt('Do you have a car');

if (age.toLowerCase === 'y') {
  console.log('you can join us ');
  alert('Hurry up ');

} else if (age.toLowerCase === 'n') {
  console.log('you can\'t join us ');
  alert('Hurry up ');
} else {
  alert('WELCOME ');
}


if (uni === 'y') {
  console.log('GREAT ');
  alert('GREAT ');

} else if (age === 'n') {
  console.log('hope to have a bachelor\'s degree ');
  alert('hope to have a bachelor\'s degree ');
} else {
  alert('WELCOME To LTUC ');
}



if (country === 'y') {
  console.log('Nice');
  alert('Nice ');

} else if (age === 'n') {
  console.log('We are sorry ');
  alert('We are sorry ');
} else {
  alert('WELCOME To AMMAN ');
}

switch (visit.toUpperCase) {

case 'Y':
  console.log('You have a 25% discount in next time');
  alert('You have a 25% discount in next time');
  break;

case 'N':

  console.log('You have a 10% discount in first time');
  alert('You have a 10% discount in first time');
  break;
default:
  alert('WELCOME LTUC');
  break;
}
switch (car.toUpperCase) {

case 'Y':
  console.log('You can come each time');
  alert('You can come each time');
  break;

case 'N':
  console.log('you can come by buses');
  alert('you can come by buses');
  break;
default:
  alert('WELCOME To ASAC');
  break;
}