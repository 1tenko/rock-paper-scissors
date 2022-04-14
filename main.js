const buttons = document.querySelectorAll('button');
const roundCount = document.querySelector('#round');
const result = document.querySelector('#roundResult');
const score = document.querySelector('#score');

let userScore = 0;
let computerSore = 0;
let round = 0;


const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
];

buttons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const userSelectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === userSelectionName);
        makeSelection(selection);
    })
});

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}