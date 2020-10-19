// Balanced brackets

const match = {
   '(': ')',
   '[': ']',
   '{': '}'
};

// Complete the isBalanced function below.
function isBalanced(s) {
   const [left, right] = [new Stack(), new Stack()];

   const sCopy = s.split('');
   while (sCopy.length > 0) {
      right.insert(sCopy.pop());
   }

   while (left.size() || right.size()) {
      if (left.size() > 0 && match[left.peek()] === right.peek()) {
         left.pop();
         right.pop();
      } else {
         const errorCheck = left.insert(right.pop());
         if (errorCheck === true) return 'NO';
      }
   }

   return 'YES';
}

class Stack {
   constructor() {
      this.data = [];
      this.contains = {
         '(': 0,
         '[': 0,
         '{': 0
      };
      this.length = 0;
   }

   size() {
      return this.length;
   }

   insert(val) {
      this.length++;
      this.data.push(val);
      if (this.contains[val] === undefined) {
         return true;
      } else {
         this.contains[val]++;
      }
      return;
   }

   isEmpty() {
      return this.length <= 0;
   }

   pop() {
      if (this.isEmpty()) {
         console.log('empty');
         return;
      }

      const temp = this.data.pop();
      this.contains[temp]--;
      this.length--;
      return temp;
   }

   peek() {
      if (this.isEmpty()) {
         console.log('empty');
         return;
      }

      return this.data[this.length - 1];
   }
}

// Passed 21 test cases successfully.
