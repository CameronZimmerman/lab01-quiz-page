import { answerContainsY, calculatePercentage } from './utils.js';

const startQuizButton = document.getElementById('quiz-start-button');
const resultsDisplayElement = document.getElementById('results-display');

startQuizButton.addEventListener('click', () => {
    //quiz introduction
    alert('Hello and welcome to the quiz about me, Cameron.');
    //confirm user would like to take quiz, if not break function
    if (!confirm('Thank you for participating. Are you sure you would you like to continue? (I hope you remembered the juicy details!)')) {
        return;
    }
    //Get users first and last name
    const fName = prompt('What is your first name?');
    const lName = prompt(`Okay ${fName} what is your Last name?`);  
    //questions to ask user
    const questionsArr = 
    ['am I 19 years of age?',
        'is my favorite food Tortellini with white sauce?',
        'Are all of my favorite passtimes included in this list? 1. Gaming 2. Game Development 3. Ukulele',
        'If I could be any animal, would I be a Gerbil?',
        'Did I want to be a Dentist when I was much younger?'];
    const answerKey = ['N', 'Y', 'N', 'N', 'Y'];

    let correctAnswers = 0;
    const possibleCorrectAnswers = 3;

    //for each question in our array, ask the user a question and if the answer matches the key add to correct answers
       
    for (let i = 0; i < questionsArr.length; i++){
        if (answerContainsY(prompt(questionsArr[i]), answerKey[i])){
            correctAnswers++;
        }
    }

    //set results text content based on how well they did
    if (correctAnswers === 0){
        resultsDisplayElement.textContent = `you should definitely do some more Cameron reasearch, ${fName} ${lName}.`;
        resultsDisplayElement.style.color = 'red';

    }
    else if (correctAnswers > 0 && correctAnswers < possibleCorrectAnswers){
        resultsDisplayElement.textContent = `you could probably brush up a bit on your Cameron knowledge, ${fName} ${lName}.`;
        resultsDisplayElement.style.color = 'red';

    }
    else if (correctAnswers === possibleCorrectAnswers){
        resultsDisplayElement.textContent = `Wow ${fName}... I'd go so far as to say you're a Cameron expert`;
        resultsDisplayElement.style.color = 'green';
    }
   
    resultsDisplayElement.textContent += ` (${correctAnswers}/${possibleCorrectAnswers}) correct or ${calculatePercentage(correctAnswers, possibleCorrectAnswers)} percent!`;
    
});

