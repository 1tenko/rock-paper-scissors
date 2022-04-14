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

function makeSelection(selection) {
    const computerSelection = computerPlay();
    roundResult(selection, computerSelection);
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function roundResult(selection, opponentSelection) {
    if (isWinner(selection, opponentSelection)) {
        userScore++;
        result.textContent = `User wins! ${selection.name} beats ${opponentSelection.name}`;
    } else if (isWinner(opponentSelection, selection)) {
        computerSore++;
        result.textContent = `Computer wins! ${opponentSelection.name} beats ${selection.name}`;
    }
    score.textContent = `Score: ${userScore} user, ${computerSore} cpu`;
    roundCount.textContent = `round ${round++}`;

}