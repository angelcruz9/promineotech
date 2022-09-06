// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let numbers = [3, 9, 23, 64, 2, 8, 28, 93];

//•	Programmatically subtract the value of the first element in the array from the value in the 
//last element of the array 
//(do not use numbers to reference the last element, find it programmatically, 
//ages[7] – ages[0] is not allowed). Print the result to the console.
let lengthOfArr = numbers.length;
const num1 = numbers[lengthOfArr - numbers.length];
const num2 = numbers[lengthOfArr - 1];
let differenceOf = num1 - num2;
console.log(differenceOf);
//•	Add a new age to your array 
//and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
let newAge = numbers.push(67);
let num3 = numbers[newAge -1 ];
let num4 = numbers[newAge - numbers.length];
console.log(num4 - num3);
//Use a loop to iterate through the array and calculate the average age. 
//Print the result to the console.
let count = 0;
let total = 0;
for (const element of numbers){
	if (numbers != undefined){
		count++;
		total += element;
	}
}
let avg = total / count;
console.log(avg);
//Create an array called names that contains the following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy' , 'Tim' , 'Sally' , 'Buck' , 'Bob']; 
//Use a loop to iterate through the array and calculate the average number of letters per name. 
//Print the result to the console.
let count2 = 0 ;
for (const element of names){
	if( element.length != 0) {
		count2 += element.length;
	}
}
let avg2 = count2 / names.length;
console.log('The avereage is ' + avg2);
console.log(count2);
//concatenate all the names together, separated by spaces, 
//and print the result to the console
let allNames=" ";
for (const element of names) {
	allNames += element + " ";
}
console.log('All names together with space ' + allNames);
//How do you access the last element of any array?
console.log('To access the last element in the array we use ' + names[names.length - 1]);
//How do you access the first element of any array?
console.log('the zero index is always the first ' + names[0]);
//Create a new array called nameLengths. Write a loop to iterate over the 
//previously created names array and add the length of each name to the nameLengths array
let nameLength = [names.length]; 
for (let i = 0; i < names.length; i++) {
	nameLength[i] = names[i].length; 
}
console.log(nameLength);
//Write a loop to iterate over the nameLengths array and calculate the sum 
//of all the elements in the array. Print the result to the console.
let sum = 0;
for(const element of nameLength){
	sum += element;
}
console.log(sum);
//Write a function that takes two parameters, word and n, 
//as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)
function repeatString(str, num) {
	return str.repeat(num);
  }
 console.log(repeatString("hello", 3));
 //Write a function that takes two parameters, firstName and lastName,
 // and returns a full name (the full name should be the first and the last name separated by a space)
 function fullName (firstName , lastName){
	return firstName + " " + lastName;
 }
 console.log(fullName('Pablo', 'Cabrera'));
 //Write a function that takes an array of numbers and 
 //returns true if the sum of all the numbers in the array is greater than 100.
 function arrOfNum (array){
	let sum2 = 0;
	for (const element of array){
		sum2 += element;
		if(sum2 >= 100){
			return 'True';
		}else {
			return 'False';
		}

	}

 }
 console.log(arrOfNum(numbers));
 //Write a function that takes an array of numbers and returns 
 //the average of all the elements in the array.
 function avgArr(array){
let count3 = 0;
let total3 = 0;
for (const element of array){
	if (array != undefined){
		count3++;
		total3 += element;
	}
}
return total3 / count3;
 }
 console.log(avgArr(numbers));

 //Write a function that takes two arrays of numbers and 
 //returns true if the average of the elements in the first array 
 //is greater than the average of the elements in the second array.

 function compareArrays (array1 , array2){
let count4 = 0;
let total4 = 0;
for (const element of array1){
	if (array1 != undefined){
		count4++;
		total4 += element;
	}
}
let average2 = total4 / count4;
 
let count5 = 0;
let total5 = 0;
for (const element of array2){
	if (array2 != undefined){
		count5++;
		total5 += element;
	}
}
let average3= total5 / count5;

return average2 > average3;
 }
 let yearsKnown=[10 , 15 , 35 ,100 ,99 ,33 ,67];
 let yearsForgotten= [10 ,6, 3, 7 ,4, 9 ,8 , 13];
 console.log(compareArrays(yearsKnown , yearsForgotten));

 //Write a function called willBuyDrink that takes a boolean isHotOutside, 
 //and a number moneyInPocket, and returns true if it is hot outside and 
 //if moneyInPocket is greater than 10.50
 function willBuyDrink (isHotOutside , moneyInPocket){
	if(isHotOutside=== true){
		if(moneyInPocket > 10.50){
			return "it is hot outside and im going to go get a drink";
		}
	}
 }
 console.log(willBuyDrink(true , 300));
 //Create a function of your own that solves a problem. 
 //In comments, write what the function does and why you created it.
 function isHeTall (heigth){
	return heigth > 6 ;
 } console.log(isHeTall(6.4));
 // i made this function because im 6'4 and i thought it was fun to do 
