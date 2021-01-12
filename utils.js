export function answerContainsY(answerString, correctChar) {
    if (correctChar === 'Y'){
        return answerString[0].toUpperCase() === 'Y';
    }

    else {
        return answerString[0].toUpperCase() !== 'Y';
    }  
}

export function calculatePercentage(correctNumber, expectedNumber) {
    return (correctNumber / expectedNumber) * 100;
}
