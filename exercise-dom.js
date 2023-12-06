const container = document.querySelector('#container');

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!!";
blueH3.style.color = 'blue';

container.appendChild(blueH3);

const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.border = 'black';

const newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div";
const newP = document.createElement('p');
newP.textContent = "ME TOO";

newDiv.appendChild(newH1)
newDiv.appendChild(newP);
container.appendChild(newDiv);