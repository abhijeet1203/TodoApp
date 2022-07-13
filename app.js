const enterButton = document.getElementById('input-button-home');
const inputTextField = document.querySelector('.input-text-child');

const afterEvent = () => {
    let inputData = document.querySelector('.input-text-child').value;
    let newDivEle = document.createElement('div');
    let showInputData = document.createTextNode(inputData);
    let conatinerDiv = document.querySelector('.data-container-home');

    newDivEle.classList.add('data-sub-container');
    newDivEle.appendChild(showInputData);
    conatinerDiv.appendChild(newDivEle);
    document.querySelector('.input-text-child').value = '';
}

enterButton.addEventListener(`keypress`, e => {
    if (e.key === 'Enter') afterEvent();
});

enterButton.addEventListener(`click`, afterEvent);

inputTextField.addEventListener('keyup', e => {
    if(e.key === 'Enter') afterEvent(); 
})