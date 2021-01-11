import {answerContainsY} from './utils.js';

const startQuizButton = document.getElementById('quiz-start-button');
const resultsDisplayElement = document.getElementById('results-display');
const quizContent = document.getElementById('hide-this');

startQuizButton.addEventListener('click', () => {
    //quiz introduction
    alert('Hello and welcome to the quiz about me.');
    //confirm user would like to take quiz, if not break function
    if (!confirm('Thank you for participating. Are you sure you ould you like to continue? (I hope you remembered the juicy details!')) {
        return;
    }
    //Get users first and last name
    const fName = prompt('What is your first name?');
    const lName = prompt(`Okay ${fName} what is your Last name?`);  
    //questions to ask user
    const questionsArr = 
    ['is Cameron 19 years of age?',
        'is Cameron\'s favorite food Tortellini with white sauce?',
        'is are all of Cameron\'s favorite passtimes included in this list? 1. Gaming 2. Game Development 3. Ukulele'];
    const answerKey = ['N', 'Y', 'N'];

    let correctAnswers = 0;
    //for each question in our array, ask the user a question and if the answer matches the key add to correct answers
       
    for (let i = 0; i < questionsArr.length; i++){
        if (answerContainsY(prompt(questionsArr[i]), answerKey[i])){
            correctAnswers++;
        }
    }
    
});

