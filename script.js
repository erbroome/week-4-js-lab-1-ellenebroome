// JavaScript Lab 1 – Problem Solving
// Write all your code below each prompt

// 1. Sandwich Calculator
// Each guest gets 2 sandwiches. You have 12 guests.
// Calculate total sandwiches needed.

let guests = 12; // Number of guests
let sandwichesPerGuest = 2; // Sandwiches per guest
let totalSandwiches = guests * sandwichesPerGuest; // Total sandwiches needed
console.log("Total sandwiches needed: " + totalSandwiches); // Output the result







// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?
let budget = 40; // Total budget
let ticketPrice = 9.50; // Price of one movie ticket
let ticketsCanBuy = Math.floor(budget / ticketPrice); // Full tickets that can be bought
let leftoverAmount = budget % ticketPrice; // Leftover amount after buying tickets  
console.log("Tickets you can buy: " + ticketsCanBuy); // Output the number of tickets
console.log("Leftover amount: $" + leftoverAmount.toFixed(2)); // Output the leftover amount


/* 3. Dog Age Converter
Convert a dog’s age to human years
(1 dog year = 7 human years)
*/
let dogage = 7; // Dog's age in years
let humanYears = dogage * 7; // Convert dog years to human years
console.log("Dog's age in human years: " + humanYears); // Output the dog's age in human years


// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.
let myName = "Ellene"; // Your name
let favoriteFood = "sushi"; // Your favorite food
let hobby = "Hiking"; // Your hobby 
console.log("My name is " + myName + ", my favorite food is " + favoriteFood + ", and I enjoy " + hobby + "."); // Output the sentence


// 🌟 BONUS (Optional)
// Use prompt() to ask for the user's name, then greet them.
let fullname = prompt("What's your name?");
console.log("Hello, " + fullname + "!");
