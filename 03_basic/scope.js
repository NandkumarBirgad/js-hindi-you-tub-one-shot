function outerFunction(outerVariable) {
  // outerFunction's scope
  const innerVariable = "I am inside the inner function.";

  function innerFunction(innerParameter) {
    // innerFunction's scope
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
    console.log("Inner parameter:", innerParameter);
  }

  // You can call the inner function from within the outer function
  innerFunction("Hello!"); 
}

// Call the outer function
outerFunction("I am a variable from the outer scope."); 

// You cannot access innerFunction or innerVariable from here.
// console.log(innerVariable); // This would result in an error: "innerVariable is not defined"