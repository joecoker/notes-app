function describe(description, func) {
  console.log(description);
  func();
}

function it(description, func) {
  console.log(description);
  func();
}

function expect(input) {
  this.output = input;
  return this;
}

function toEqual(expectation) {
  message = ("Expected: " + expectation +
    "\nOutput: " + this.output);

  if (this.output === expectation) {
    console.log(message + "\nTest passed.");
  }
  else {
    console.log(message + "\nTest failed.");
  }
}

function isArray(expectation) {
  message = ("Expected: isArray() === " + expectation +
    "\nOutput: isArray() === " + Array.isArray(this.output));

  if (Array.isArray(this.output) === expectation) {
    console.log(message + "\nTest passed.");
  }
  else {
    console.log(message + "\nTest failed.");
  }
}

// Example layout:

// describe("", function() {
//   it("", function() {
//     expect().toEqual();
//   })
// })