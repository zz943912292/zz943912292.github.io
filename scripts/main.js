var myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello Pikachu!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pikachu.jpg') {
      myImage.setAttribute('src', 'images/pikachu2.jpg');
    } else {
      myImage.setAttribute('src', 'images/pikachu.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pikachu is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pikachu is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}