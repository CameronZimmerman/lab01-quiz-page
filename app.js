import { answerContainsY, hideElement, askQuestion } from './utils.js';

const startQuizButton = document.getElementById('quiz-start-button');
const resultsDisplayElement = document.getElementById('results-display');
const quizContent = document.getElementById('hide-this');

startQuizButton.addEventListener('click', () => {
    //quiz introduction
    alert('Thank you for participating! Hope you remembered all the juicy details');

    //Get users first and last name
    const fName = prompt('What is your first name?');
    const lName = prompt('What is your Last name?');

    
});

