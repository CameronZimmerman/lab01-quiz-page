export function answerContainsY(answerString, correctChar) {
    if (correctChar === 'Y'){
        return answerString[0].toUpperCase() === 'Y';
    }

    else {
        return answerString[0].toUpperCase() !== 'Y';
    }
   
}
