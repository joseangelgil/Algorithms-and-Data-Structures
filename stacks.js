// Stacks

// functions: push, pop, peek, length

// Creates a stack
var Stack = function() {    
  this.count = 0;
  this.storage = {};


// Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

// Removes and returns the value at the end of the stack
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }

// Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1];
  }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek()) // 2
console.log(myStack.pop())  // 2
console.log(myStack.peek()) // 1
myStack.push('freeCodeCamp')
console.log(myStack.size()) // 2
console.log(myStack.peek()) // freeCodeCamp
console.log(myStack.pop())  // freeCodeCamp
console.log(myStack.peek()) // 1
