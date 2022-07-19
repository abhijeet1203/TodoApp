const enterButton = document.getElementById('input-data-btn');
const inputTextField = document.getElementById('input-text-child');

let newDivEle;
let dateTimeStr = new Date().toDateString();
let localTime = new Date().toLocaleTimeString();

//Create new element
let newEl = document.createElement('h2');
//Setting context
newEl.innerHTML = `Welcome! It's ${dateTimeStr}, ${localTime}`
//Append
let appendNewEl = document.getElementById('welcome-header').appendChild(newEl);

const afterEvent = () => {
    let inputData = document.getElementById('input-text-child').value;
    newDivEle = document.createElement('div');
    newDivEle.innerHTML = `<div class="row  justify-content-lg-center mb-3" id="row-user-input">
                                                <div class="col col-lg-4" id="user-entry">
                                                    <div class="fs-3" id="1"><strong>${inputData}</strong></div>
                                                </div>
                                                <div class="col-lg-2" id="del-btn">
                                                    <input type="button" value="X" class="btn btn-danger" id="btn-delete" onclick=${removeUserInputData()}>
                                                </div>
                                            </div>`

    if (inputData) {
        appenInputData = document.getElementById('user-entered-tasks-1').appendChild(newDivEle);
    }
    document.getElementById('input-text-child').value = '';
}

enterButton.addEventListener(`click`, e => {
    afterEvent();
});

inputTextField.addEventListener('keyup', e => {
    if (e.key === 'Enter') afterEvent();
});

const removeUserInputData = () => {
    document.getElementById('user-entered-tasks-1').addEventListener('click', e => {
        targettedElement = e.target;
        grandParentForTarEle = targettedElement.parentElement.parentElement;

        if (targettedElement.matches('#btn-delete') && grandParentForTarEle.matches('#row-user-input')) {
            grandParentForTarEle.remove();
        }
    });
}