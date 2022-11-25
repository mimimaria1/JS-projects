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

//--------------------------------------------------------

//--------------------------------------------------------

//--------------------------------------------------------

//--------------------------------------------------------
