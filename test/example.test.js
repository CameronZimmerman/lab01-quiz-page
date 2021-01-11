// IMPORT MODULES under test here:
import { answerContainsY } from '../utils.js';

const test = QUnit.test;

test('function will return true when given string that starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerContainsY('yabadabadoo');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('function will return false when given string that starts with not y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerContainsY('nabadabadoo');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
