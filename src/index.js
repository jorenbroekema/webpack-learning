import _ from 'lodash';
import './assets/css/style.css';
import Shark from './assets/images/shark.jpg';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  let myPicture = new Image();
  myPicture.src = Shark;

  element.appendChild(myPicture);

  return element;
}

document.body.appendChild(component());