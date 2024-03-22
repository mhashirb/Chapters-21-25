
//Chapter 21-25
// Question 1
// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enetr last name");
// fullName=firstName+ lastName;
// alert("Welcome "+fullName);

// Question 2
// var fmobiles=prompt("Enter the model in samsung ultra series which you like the most");
// alert("Length of string is "+fmobiles.length);

// Question 3
// var country="Pakistani";
// for(var i=0;i<country.length;i++){
//     if(country=="n"){
//         alert(i);
//     }
// }

// Question 4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf('l');
// document.write("Last Index of 'l' in 'Hello World': " + lastIndex);

// Question 5
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// document.write("Character at 3rd Index in 'Pakistani': " + charAtIndex3);

// Question 6
// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enetr last name");
// alert("Welcome "+firstName +" "+lastName);

// // Question 7
// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("Replaced 'Hyder' with 'Islam': " + replacedWord);

// Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// document.write("Replaced all occurrences of 'and' with '&': " + replacedMessage);

// Question 9
// var str = "472";
// var num = Number(str);
// var message = "String: " + str + "<br>Type: " + typeof str + "<br><br>Number: " + num + "<br>Type: " + typeof num;
// document.write(message);

// Question 10
// var userInput = prompt("Enter your name");
// userInput = userInput.toUpperCase();
// document.write("Input in capital letters: " + userInput);

// // Question 11
// var userInput = prompt("Enter something to convert into title case");
// userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("Input in title case: " + userInput);

// Question 12
// var num = 35.36;
// var num = num.toString().replace(".", "");
// document.write("Number as string without dot: " + num);

// Question 13
// var username = prompt("Please enter a valid username:");
// var check=true;
// var specialSymbols = ['@', '.', ',', '!'];
// for (var i = 0; i < username.length; i++) {
//   if (specialSymbols.includes(username[i])) {
//     check=false; 
//   }
// } 

// if(check===false) {
//   alert("Username contains special symbols [@ . , !]. Please enter a valid username.");
// } 
// else {
//   alert("Valid username entered: " + username);
// }

//Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search:");
// var check=true;
// var lowercaseItem = userInput.toLowerCase();
//       for (var i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === lowercaseItem) {
//           check=false
//         }
//       }

//       if (check===false){
//         alert("Yes '" + userInput + "' is found in the list.");
//       } 
//       else{
//         alert("Sorry! '" + userInput + "' is not found in the list.");
//       }
    
