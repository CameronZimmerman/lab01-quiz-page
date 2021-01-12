// IMPORT MODULES under test here:
import { answerContainsY, calculatePercentage } from '../utils.js';

const test = QUnit.test;

test('function will return true when given string that starts with correct char', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerContainsY('yabadabadoo', 'Y');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('function will return false when given string that starts with correct char', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerContainsY('nabadabadoo', 'N');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('function will return a whole number percentage of the fraction from two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 67;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculatePercentage(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

