class Stack {
  constructor() {
    this.items = [];
  }
}

Stack.prototype.push = function (val) {
  const len = this.items.length;
  this.items[len] = val;
  console.log(`After adding ${val} : ${this.items}`);
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    console.log("*** Stack is empty ***");
    return;
  }
  this.items.length = this.items.length - 1;
  console.log(`After poping : ${this.items}`);
};

Stack.prototype.top = function () {
  if (this.isEmpty()) {
    console.log("*** Stack is empty ***");
    return;
  }
  const len = this.items.length;
  console.log(`Top element : ${this.items[len - 1]}`);
};

Stack.prototype.isEmpty = function () {
  if (this.items.length) return false;
  return true;
};

const stk = new Stack();
stk.push(5);
stk.push(10);
stk.pop();
stk.top();
