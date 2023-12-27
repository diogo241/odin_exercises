/*
******************************************************
Understanding Errors
******************************************************
*/

//ReferenceError
    -> A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope. 
  
//Common types of errors
    -> Syntax error : A syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript.
    -> Reference error: A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope. 
    -> Type error: a TypeError may be thrown when:
        --> an operand or argument passed to a function is incompatible with the type expected by that operator or function
        --> or when attempting to modify a value that cannot be changed
        --> or when attempting to use a value in an inappropriate way

        A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or operation against
    
//Tips for resolving errors
    1-> Read the error carefully and try to understand it on your own.
    2-> Next, Google the error! Chances are, you can find a fix or explanation on StackOverflow or in the documentation.
    3-> Use the debugger!
    4-> Make use of the console! console.log() is a popular choice for quick debugging.

//Errors vs. warnings
Lastly, many people are met with warnings and treat them as errors. Errors will stop the execution of your program or whatever process you may be attempting to run and prevent further action. Warnings, on the other hand, are messages that provide you insight on potential problems that may not necessarily crash your program at runtime, or at all!