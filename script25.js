/*
// task 1
function number(a, b) {
    return a / b;
}
let result = number(18, 6);
console.log(result)

// task 2
function number(a) {
    return a *= a;
}
let result = number(5);
console.log(result)

// task 3
function numbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let result = numbers([2, 4, 6, 8]);
console.log(result); 

// task 4
function str(text) {
    return text.length;
}

let result = str("Kazakhstan");
console.log(result); 

// task 5
function absoluteValue(number) {
    if (number < 0) {
        return -number; 
    }
    return number;  
}
console.log(absoluteValue(+5)); 
console.log(absoluteValue(-40));   
console.log(absoluteValue(2));    

// task 6
function getStringLengths(textArray) {
    return textArray.map(text => text.length); 
}

let result = getStringLengths(["Kazakhstan", "future", "Revolution"]);
console.log(result); 

// task 7
function number(a , b) {
    return a > b ? a : b;
}
let result = number(12, 10)
console.log(result)

// task 8
function repeatString(text, count) {
    let result = "";  
    for (let i = 0; i < count; i++) {
        result += text; 
    }
    return result;  
}
let result = repeatString("Kazakhstan " , 5);
console.log(result);  

// task 9
function doubleValues(numbers) {
    let result = [];  
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);  
    }
    return result; 
}
let numbersArray = [4, 5, 3, 10, 8];
let result = doubleValues(numbersArray);
console.log(result);  

// task 10
function num(number) {
    let array = 0
    if(number % 2 === 0) {
        return "четный"
    } else {
        return "не четный"
    }
}
let result = num(5)
console.log(result)

// Medium: task 1
function numbers(count) {
    let number = [];
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            number.push(count[i]);
        }
    }
    return number;
}
let numbersArray = [-8, -2, 4, 2, 0];
let posnumbers = numbers(numbersArray);
console.log(posnumbers);

// task 2
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let originalString = "Al-HaisaM";
let teString = reverseString(originalString);
console.log(teString);

// task 3
function chislo(count) {
    let sum = 0; 
    for (let i = 0; i < count.length; i++) {
        sum += count[i]; 
    }
    return sum / count.length; 
}

let array = [4, 6, 8, 2];
let result = chislo(array);
console.log(result); 

// task 4
function num(count) {
    return count.sort((a, b) => b - a); // по убыванию
}
let result = num([3, 4, 2, 5]);
console.log(result)

// task 5
function chislo(number) {
    let sum = 1;
    for (let i = 1 ; i <= number; i++) {
        sum *= i;
    }
    return sum 
}
let result = chislo(5)
console.log(result)
*/
// task 6
function getTopStudents(students) {
    let topStudents = students.filter(student => student.averageGrade > 70);
    let topStudentNames = topStudents.map(student => student.name);
    return topStudentNames;
}
let students = [
    { name: "Marat", age: 20, averageGrade: 85 },
    { name: "Archie", age: 22, averageGrade: 65 },
    { name: "Zhannat", age: 23, averageGrade: 75 }
];
console.log(getTopStudents(students))



