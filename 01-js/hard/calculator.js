/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  get getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  add(x) {
    this.result+=x;
  }

  subtract(x) {
    this.result-=x;
  }

  multiply(x) {
    this.result*=x;
  }

  divide(x) {
    this.result/=x;
  }

  calculate(expression) {
    expression = expression.replace(/\s/g,'');
    if (expression.length !== expression.replace(/[^\d\(\)\+\-\*\/]/g,'').length) {
      throw TypeError(`Invalid characters found in expression \"${expression}\"`);
    }

    function isOperator(char) {
      return ['+', '-', '*', '/'].includes(char);
    }
  
    function applyOperation(operator, operand1, operand2) {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
      }
    }
  
    const stack = [];
    
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      
      if (/[0-9]/.test(char)) {
        let num = parseInt(char);
        
        
        while (i + 1 < expression.length && /[0-9]/.test(expression[i + 1])) {
          num = num * 10 + parseInt(expression[i + 1]);
          i++;
        }
  
        stack.push(num);
      } else if (isOperator(char)) {
        
        stack.push(char);
      } else if (char === '(') {
        
        stack.push(char);
      } else if (char === ')') {
        
        while (stack.length > 1) {
          const operand2 = stack.pop();
          const operator = stack.pop();
          const operand1 = stack.pop();
          const result = applyOperation(operator, operand1, operand2);
          console.log(result);
          if (stack[stack.length - 1] !== '(') {
            stack.push(result);
          }
          else {
            stack.pop();
            stack.push(result);
            break;
          }
        }
      }
    }

    while (stack.length > 1) {
      const operand2 = stack.pop();
      const operator = stack.pop();
      const operand1 = stack.pop();
      stack.push(applyOperation(operator, operand1, operand2));
    }
  
    return stack[0];
  }
}

const calc = new Calculator();
console.log(calc.getResult);
calc.add(5)
console.log(calc.getResult);
calc.divide(3)
console.log(calc.getResult);
calc.clear()
console.log(calc.getResult);
console.log(calc.calculate('(1 + (2 + 7)*3) * 4 / (2 * (1 + (3 - 2))) '))

module.exports = Calculator;