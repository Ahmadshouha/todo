'use strict';
function askQuestion(question){
    let answer = prompt(question);
console.log(answer=="yes"|| answer=="no");
if(answer=="yes"|| answer=="no"){
    return answer;
}
else if (answer ==" "){
    return "invalid"
}
}
let questionOne = askQuestion ("do you like school");
let questionTwo = askQuestion ("do you like studying early in the morning");
let questionThree = askQuestion("do you like studying late at the night");

let answerArr=[questionOne,questionTwo,questionThree];
console.log(answerArr);

for(let i=0; i<answerArr.length; i++){
    console.log(answerArr[i]);
}