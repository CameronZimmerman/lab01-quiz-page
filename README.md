# lab01-quiz-page
Plan: 

Overall Goal: Create a quiz which lets the user answer questions and show results using alert,confirm, and prompt

HTML Skeleton: 

- Create a site that shows a picture, and has information about quiz topic
    - picture div
    - p for info
- Create button to start quiz
- create empty div to display user results 

Quiz: 

- grab dom elements
    - button element
    - empty div element
    - verify: log each element to see if grabbed successfully

- Create event listner for button
    -verify: put log in listener

- On click 
    - Hide information! so they can't cheat buahahaha
    - alert user (hello or something)
    - create confirm, and check and see if it returns true(they clicked yes)
        - if yes continue with function
        - if no break function (return)
        - verify: have variables for each return of the question function, if true do x
    - Ask the user three questions 
        - create array of questions
        - create func that asks question
        - store users answer
        - check if answer is yes
            - check first char === y
    - display results with name and num correct (percentage)
        - verify: results will show correctly

    - TEST functions: 
        - answerContainsY(answerString);