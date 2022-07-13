// console.log('Hello');
// Creating a new div element
let divElement = document.createElement('div');

//Adding class to divElement
divElement.classList.add('data-sub-container-4');
//Adding text content to the div element
let textDivElement = document.createTextNode('This is div Test');

//Adding textDivElement to divElement - 2 methods appendChild() & insertBefore()
divElement.appendChild(textDivElement);

// Adding divElement to the webpage
//2 steps - 1st step ->
let conatinerDiv = document.querySelector('.data-container-home');

    //Appending divElement to containerDiv

    conatinerDiv.appendChild(divElement);

