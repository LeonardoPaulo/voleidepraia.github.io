var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/volei_de_praia.jpg') {
      myImage.setAttribute ('src','imagens/volei_de_praia2.jpg');
    } else {
      myImage.setAttribute ('src','imagens/volei_de_praia.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Digite seu nome.');
  localStorage.setItem('nome', myName);
  myHeading.innerHTML = 'Vamos no torneio de vôlei, ' + myName + ' ?';
}

if(!localStorage.getItem('nome')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('nome');
  myHeading.innerHTML = 'Vamos no torneio de vôlei, ' + storedName + ' ?';
}

myButton.onclick = function() {
  setUserName();
}