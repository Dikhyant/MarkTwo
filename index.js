const readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log( chalk.yellow("Hi there"));
const username = readLineSync.question(chalk.yellow("Tell us your name please\n"));

console.log(chalk.blue("Dikhyant's Fandom quiz"));

class Question{
  constructor( question , a , b , c , d , answer ) {
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
  }
}

const questionList = [
  new Question(
    "Who is my Idol ?",
    "Steve Jobs",
    "Elon Mush",
    "Nikola Tesla",
    "Warren Buffett",
    'b'
  ),
  new Question(
    "Which of these am I most passonate about ?",
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "UI/UX Design",
    'c'
  ),
  new Question(
    "Which is my favorite Web Framework ?",
    "Angular",
    "React JS",
    "Django",
    "Vue",
    'b'
  ),
  new Question(
    "Can you guess why I ever started on the journey of Web Dev ?",
    "For College",
    "To work in FANG companies",
    "To be freelancer",
    "Ye se hi , Sexy laga",
    'd'
  ),
  new Question(
    "Why I chose Engineering ?",
    "Society Pressure",
    "Better opportunities",
    "Passonate about studing computers",
    "Just random decision",
    'c'
  )
]

const play = ( question ) => {
  console.log(chalk.green(question.question));
  console.log(chalk.green('a : ') + chalk.green(question.a));
  console.log(chalk.green('b : ') + chalk.green(question.b));
  console.log(chalk.green('c : ') + chalk.green(question.c));
  console.log(chalk.green('d : ') + chalk.green(question.d));

  const userAnswer = readLineSync.question();

  if(userAnswer == question.answer){
    console.log(chalk.blue("Correct Answer"));
    score++;
  } else {
    console.log(chalk.red("Oops . Wrong answer"));
    console.log( chalk.yellow("Correct answer is " + question.answer));
  }

  console.log(chalk.blue("Score = " + score));
} 

//iterating all questions
questionList.forEach( (value) =>{
  play(value);
})

console.log( chalk.yellow(username + " your score is " + score));
console.log(chalk.blue("Thank you " + username + " for playing with us"));

if(score >= questionList.length - 1) {
  console.log(chalk.blue("Woah congratulation for acheiving " + score + "/" + questionList.length));
}
