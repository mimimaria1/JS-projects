// let firstBatch = 5;
// let secondBatch = 9;
// let count = firstBatch + secondBatch;
//  console.log(count);
//--------------------------------------------------------
// let myAge = 30;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
//  console.log(myDogAge);
//--------------------------------------------------------
// let count = 5;
// count + 1
// count = count + 1;
// count = count + 10;
// count = count - 6;
//  console.log(count);
//--------------------------------------------------------
// let bonusPoint = 50;
//  console.log(bonusPoint);
// bonusPoint = bonusPoint + 50;
//  console.log(bonusPoint);
// bonusPoint = bonusPoint - 75;
//  console.log(bonusPoint);
// bonusPoint = bonusPoint + 45;
//  console.log(bonusPoint);
//--------------------------------------------------------
// Setting up the race....
// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
//   }
//   countdown();
// GO!
// Players are running the race!
// Race is finished!
//--------------------------------------------------------
// Create a function that logs out the number 42 to the console.
// Call /invoke the function.
//  function myLogger() {
//   console.log(42);
// }
// myLogger();
//--------------------------------------------------------
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// Create a function that logs out the summ of all the lap times.
// And call/invoke the function

// function logLapTime() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }
// OR >> function logLapTime() {
//    console.log(lap1 + lap2 + lap3);
// }
// logLapTime();
// (important to console.log inside the function and not outside, otherwise it will be denied)
//--------------------------------------------------------

// let lapsCompleted = 0;
// // Create a function that increments the lapsCompleted variable with one.
// // Runs it three times

// function incrementLap() {
//   lapsCompleted = lapsCompleted + 4;
// }
// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted);
//--------------------------------------------------------
// DOM = Document Object Model (how you use JavaScript to modify a website)
//--------------------------------------------------------
//Grab the count-el element , store it in a countEl variable.
// let countEl = document.getElementById("count-el");

// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count; //set countEl's innerText to the count
// }
//--------------------------------------------------------
// let usaname = "Maria ";
// let message = "You got mail ";

// console.log(message + ", " + usaname + "!");

//or you can use a new variable:
//let messageToUser = message + ", " + usaname + "!"

//and then you can delete the console.log

//--------------------------------------------------------
// let name = "Maria"
// let greeting = "Hi, mijn naam is "
// let myGreeting = greeting + name;

// console.log(myGreeting)
//--------------------------------------------------------
// let points = 4;
// let bonusPoints = "4";

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);
// outcome = 44 (string will always win)
// let points = 4;
// let bonusPoints = 4;
// outcome = 8
// let points = "4";
// let bonusPoints = "4";
// outcome = 44
// let points = "100";
// let bonusPoints = 100;
// outcome = 100100

//--------------------------------------------------------
// let myPoints = 3;

// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);

//--------------------------------------------------------
// let namee = "Linda";
// let greeting = "Hi there ";

// function greetLinda() {
//   console.log(greeting + ", " + namee + "!");
// }

// greetLinda();
//--------------------------------------------------------
// let firstName = "Maria ";
// let lastName = "Nerwa";

// let fullName = firstName + lastName;

// console.log(fullName);
//--------------------------------------------------------
// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("my points: " + 5 + 9) // "my points: 59"
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114
//--------------------------------------------------------

// let age = 20;
// if (age < 21) {
//   console.log("Your too young bro! Get the f out of here..");
// } else {
//   console.log("WELCOME TO BLACKJACK");
// }
//--------------------------------------------------------
// let age = 110;
// if (age < 100) {
//   console.log("No b-day card! Sawryyy");
// } else if (age === 100) {
//   console.log("The B-DAY CARD FOR YOU! CONGRATZ");
// } else {
//   console.log("You can cry now. Bye");
// }
//--------------------------------------------------------
// let firstCard = 13;
// let secondCard = 8;
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;

// if (sum < 21) {
//   console.log("Another card?");
// } else if (sum === 21) {
//   console.log("Wohooo! BLACKJACK BISH");
//   hasBlackJack = true;
// } else {
//   console.log("Your out, bye BISH");
//   isAlive = false;
// }
// console.log(isAlive);
//--------------------------------------------------------
// console.log(4 === 3); false
// console.log(5 > 2); true
// console.log(12 > 12); false
// console.log(3 < 0); false
// console.log(3 >= 3); true
// console.log(11 <= 11); true
// console.log(3 <= 2); false
//--------------------------------------------------------
// Arrays =
// let profileInformation = [
//     "Maria Nerwa",
//     "30 years old",
//     "Starting webdeveloper"
// ]
// Arrays beginnen altijd met een 0 index.
// maaaaaarrrr .... >
// console.log(featuredPosts.length)
// met .length telt hij zoals we dat gewend zijn.
//--------------------------------------------------------
// let cards = [7, 4]
// cards.push(2)
// console.log(cards)

// pushes two at the and of the array = [7, 4, 2]
//--------------------------------------------------------
// Push newMessage to the messages Array, and then log out the array
// let message = [
//     "hey, how are you?",
//     "im fine wby?",
//     "busy working and stuff"
// ]
// let newMessage = "same  here!"

// messages.push(newMessage)
// console.log(message)
//Your adding the message "same here" at the end. But with;
// message.pop() Your deleting the last item from te array
//--------------------------------------------------------
//     START            FINISH      STEP SIZE
// for ( let count = 1;    count < 11  count += 1) {
//     console.log(count)
// }

// for (let i = 0; i < 6; i += 1) {
//   console.log(i);
// }
// for (let i = 10; i < 101; i += 10){
// console.log(i)
// }
//--------------------------------------------------------
//  let messages = [
//     "hey, how are you?",
//     "im fine wby?",
//     "busy working and stuff"
//     "great to hear that!"
//
// How to get the messages underneath eachother,there are two ways:
// The hard way like this:
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])
// or with a for loop:
// for (let i = 0; messages < 5; i += 1) {}
// i += 1 ------ can also use i++ || does exactly the same
//--------------------------------------------------------
// let kards = [7, 3, 9];

// for (let i = 0; i < kards.length; i += 1) {
//   console.log(kards);
// }
//--------------------------------------------------------
// let sentence = ["hello ", "my ", "name ", "is ", "Maria"];
// let greetingEl = document.getElementById("greeting-el");
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }
// in the above i put a space after each word,
// but when you didnt do that, you can also add after the
// sentence[i] + " "; and it will automatically add spaces
//--------------------------------------------------------
// let player1Time = 328;
// let player2Time = 367;
// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }
// let fastesRace = getFastestRaceTime()   >>>always call the function afterwards!!
//
// function getTotalRaceTime() {
//     return player1Time + player2Time;
//     let totalTime = getTotalRaceTime();
//     console.log(totalTime);
// }
//--------------------------------------------------------
// GOOD TIP: WHEN YOU WANT TO CHANGE MULTIPLE LINES USE:
// cmd+d (macOs)  - ctrl-d(windows) <<<<<<<<<<<<<<<<<
//--------------------------------------------------------
// let randomNumber = Math.random() ===> Generates a random number between 0 and 0.999

// let randomNumber = Math.random() * 6; ===> Generates from 0 to 5.999

// let flooredNumber = Math.floor(3,45632) ===> REMOVES THE DECIMALS
// let randomNumber = Math.floor(Math.random() * 6); ===> 0 | 1 | 2 | 3 | 4 | 5 Generates whole numbers
// let randomNumber = Math.floor(Math.random() * 6) + 1; ===> 1 | 2 | 3 | 4 | 5 | 6 Generates from 1 to 6
//--------------------------------------------------------
// and now with a function;
// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
//   }
//   console.log(rollDice());
//  return Math.floor(Math.random() * 13) + 1; ===> generates numbers from 1 - 13
//--------------------------------------------------------
// Logical operators:

// let hasCompletedCourse = true
// let givesCertificate = true
// if(hasCompletedCourse === true) {
//     if(givesCertificate === true ) {
//         generatesCertificate()
//     }
// }
// OR you can also write is like this:
// if(hasCompletedCourse === true && givesCertificate === true) {
//     generatesCertificate()
// }
// the values of let should both be true to generate the certificate

// OR you can also write it like this:
// if(true && true) {
//     generatesCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }
//--------------------------------------------------------
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution()
// }

// function showSolution() {
//   console.log("Show the solution..")
// }
//--------------------------------------------------------
// let likesDocumentaires = true;
// let likesStartups = false;

// if (likesDocumentaires === true || likesStartups === false) {
//   recommendedMovie();
// }

// function recommendedMovie() {
//   console.log("Hey, check out this new movie!");
// }
//--------------------------------------------------------
// let course = {
//     title: "Learn JS for free",
//     lessons: 16,
//     creator: "Maria",
//     length: 63,
//     level: "beginner",
//     isFree: true,
//     tags: ["html, css"]
// }

// console.log(course.length)
// Will gives us 63, thats how you look inside the object

//--------------------------------------------------------
// Make an object with an Boolean, string, number and an array:

// let castle = {
//     title: "Come stay at our Airbnb",
//     price: 210,
//     isSuperHost: true,
//     images: ["img/apartment1.png", "img/apartment2.png"]
// }
//--------------------------------------------------------
// OBJECTS AND FUNCTIONS <------
// let person = {
//   name: "Maria",
//   age: 30,
//   country: "the Netherlands",
// };

// function logData() {
//   console.log(
//     person.name +
//       " is " +
//       person.age +
//       " years old and lives in " +
//       person.country
//   );
// }
// logData();
//--------------------------------------------------------
// IF ELSE STATEMENTS  <------
// let age = 15;

// if (age < 6) {
//   console.log("free");
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67){
//     console.log("full price")
// } else (age > 67) {
//     console.log("senior citizen discount")
// }
//--------------------------------------------------------
// LOOPS AND ARRAYS  <------
// console.log("The 5 biggest countries in the world")
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("$ " + largeCountries[i]);
// }
//--------------------------------------------------------
// PUSH, POP, UNSHIFT, SHIFT  <------
// unshift() and shift()    works in the beginning of the array
// push() and pop()         works in the end of the array
// shift()                  removes first element
// unshift()                adds first elements
// pop()                    removes last element in array
// push()                   adds last element in array
// let largeCountries = ["Monaco", "India", "USA", "Indonesia", "Netherlands"];

// largeCountries.pop();
// largeCountries.push("Pakistan");

// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

//--------------------------------------------------------
// LOGICAL OPERATORS  <------
// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("👻");
// }

// let hands = ["rock", "paper", "scissor"];

// function getHand() {
//   let randomIndex = Math.floor(Math.random() * 3);
//   return hands[randomIndex];
// }
// console.log(getHand());

//--------------------------------------------------------

//--------------------------------------------------------

//--------------------------------------------------------

//--------------------------------------------------------

//--------------------------------------------------------
