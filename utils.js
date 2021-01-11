export function answerContainsY(answerString) {
    return answerString[0].toUpperCase() === 'Y';
}
export function hideElement(element){
    element.classList.add('hidden');
}
export function askQuestion(questionString){
    return prompt(questionString);
}