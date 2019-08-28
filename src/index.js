import _ from 'lodash';
// import './style.css';
// import Img from './images.jpg';
// import Data from './data.xml';

import printMe from './print.js';


function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello','webpack'],' ');
    // element.classList.add('hello');

    // var myImg = new Image();
    // myImg.src = Img;

    // element.appendChild(myImg);

    // console.log(Data);

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());