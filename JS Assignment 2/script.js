// Question 1: Display even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Question 2: Function to add, subtract, multiply, divide using switch
function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operator';
  }

  return result;
}


console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/'));


// Question 3: Function to calculate tax using switch
function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.1;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.2;
      break;
    case (salary > 1500000):
      taxRate = 0.3;
      break;
    default:
      return 'Invalid salary';
  }

  let taxAmount = salary * taxRate;
  return taxAmount;
}


console.log(findTax(450000));  
console.log(findTax(800000));  
console.log(findTax(1200000)); 
console.log(findTax(2000000)); 




// Question 4: Function to find sum of product of corresponding digits
function sumOfProduct(n1, n2) {
  
  let num1 = n1.toString().split('').reverse();
  let num2 = n2.toString().split('').reverse();
  let length = Math.max(num1.length, num2.length);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let digit1 = parseInt(num1[i] || 0);
    let digit2 = parseInt(num2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}


console.log(sumOfProduct(6, 34));     
console.log(sumOfProduct(123, 456));  
