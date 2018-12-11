function Test(description, test) {
  console.log(description);
  console.log(test);
}

function expect(input) { 
  this.output = input;
  return this; 
}

function toEqual(expectation) { 
  if (this.output === expectation) { return "Expected: " + expectation + "\nOutput: " + this.output + "\nTest passed."; }
  else { return "Expected: " + expectation + "\nOutput: " + this.output + "\nTest failed."}
}
