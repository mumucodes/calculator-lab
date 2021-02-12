// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../utilities.js';

const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    
    const x = 20;
    const y = 5;
    const sum = 4;
    



    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);
    const result1 = subtract(x, y);
    const result2 = multiply(x, y);
    const result3 = divide(x, y);
  

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
    expect.equal(result1, sum);
    expect.equal(result2, sum);
    expect.equal(result3, sum);




});
