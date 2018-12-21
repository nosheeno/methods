let books = ["english", "urdu", "islamiyat"];
let nums = [1,2,3,4,5,6,7,8,9]
let numTwo = [1,2,3,4,5,6,7,8,9]

document.write(books+ "<br>");
 books.push("computer","maths"); // add computer and maths in array
 document.write(books+ "<br>");

 books.pop(); // delete last element from array
 document.write(books+ "<br>")

 books.shift();
 document.write(books+ "<br>");  // delete first element form array

 books.unshift("C++");
 document.write(books+ "<br>");  // insert first element form array
 

 document.write(nums+ "<br>");  // show all elements in num array

 nums.splice(1,2);  // delete elements from array. 1 is index number and 2 is number of elements start from index number 
 document.write(nums+ "<br>");


 let numthree =numTwo.slice(2, 6); // return new value 2 is index and 6 is elements
 document.write(numthree+ "<br>");
 
document.write(nums.concat(books));  // join one array with other array

