import { quizAskQuestions, quizIntroduction, showQuizResults } from './compartments.js';

const startQuizButton = document.getElementById('quiz-start-button');

startQuizButton.addEventListener('click', () => {

    const finishQuiz = quizIntroduction();
    if (finishQuiz !== false){
        quizAskQuestions();
        showQuizResults();
    }    
    
});

