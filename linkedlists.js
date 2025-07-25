// LinkedLists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');

// a.next = b;
// b.next = c;
// c.next = d;

// A --> B --> C --> D --> null

// TRAVERSE A LINKED LIST ITERATIVELY
// const printLinkedList = (head) => {
//   let current = head;
//   while(current !== null) {
//     current = current.next
//   }
// };

// TRAVERSE RECURSIVELY
// const printLinkedList = (head) => {
//   if (head === null) return;
//   printLinkedList(head.next)
// }

// printLinkedList(a);


// PROBLEM 1: CREATE AN ARRAY FROM A LINKED LIST
// ITERATIVELY
// const linkedListValues = (head) => {
//   let current = head;
//   const values = []
//   while(current !== null) {
//     values.push(current.val)
//     current = current.next
//   }
//   return arr
// };

// RECURSIVELY
// const fillValues = (head, values) => {
//   if(head === null) return
//   values.push(head.val)
//   fillValues(head.next, values)
// }

// const linkedListValues = (head) => {
//   const values = []
//   fillValues(head, values);
//   return values;
// };

// console.log(linkedListValues(a))


// PROBLEM 2: SUM ELEMENTS OF A LINKED LIST

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// ITERATIVELY
// const sumNodes = (head) => {
//   let current = head;
//   let sum = 0;
//   while (current !== null) {
//     sum += current.val
//     current = current.next
//   }
//   return sum
// }

// RECURSIVELY
// const sumNodes = (head) => {
//   if(head === null) return 0
//   return head.val + sumNodes(head.next);
// }

// console.log(sumNodes(a))



// PROBLEM 3: LINKED LIST FIND

// ITERATIVELY
// const findTarget = (head, target) => {
//   let current =  head;
//   while(current !== null) {
//     if(current.val === target) return true
//     current = current.next
//   }
//   return false
// }

// RECURSIVELY
// const findTarget = (head, target) => {
//   if(head === null) return false
//   if(head.val === target) return true
//   return findTarget(head.next, target)
// }


// console.log(findTarget(a, -1))  // true
// console.log(findTarget(a, -3))  // false
// console.log(findTarget(a, 2))   // true
// console.log(findTarget(a, 4))   // false    
// console.log(findTarget(a, 8))   // true
// console.log(findTarget(a, 7))   // true
// console.log(findTarget(a, 5))   // false



// PROBLEM 4: GET NODE VALUE

// ITERATIVELY
// const getNodeValue = (head, targetIndex) => {
//   let current = head
//   let index = 0

//   while(current !== null) {
//     if(index === targetIndex) return current.val
//     current = current.next
//     index++
//   }

//   return null
// }

// RECURSIVELY
// const getNodeValue = (head, targetIndex) => {
//   if(head === null) return null
//   if(targetIndex === 0) return head.val
//   return getNodeValue(head.next, targetIndex-1)
// }

// console.log(getNodeValue(a, 3)) // -1
// console.log(getNodeValue(a, 5)) // out of range
// console.log(getNodeValue(a, 0)) // 2
// console.log(getNodeValue(a, 2)) // 3



// PROBLEM 5: REVERSED LINKED LIST

// ITERATIVELY
// const reverseLinkedList = (head) => {
//   let prev = null;
//   let current = head;
//   while(current !== null) {    
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }

// RECURSIVELY
// const reverseLinkedList = (head, prev = null) => {
//   if(head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return reverseLinkedList(next, head)
// }

// console.log(reverseLinkedList(a))




// PROBLEM 6: ZIPPER LISTS

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // a --> b --> c --> d --> e --> f

// const x = new Node('x')
// const y = new Node('y')
// const z = new Node('z')
// x.next = y;
// y.next = z;
// x --> y --> z

// zipperLists(a, x);
// a --> x --> b --> y --> c --> z --> d --> e --> f


// ITERATIVELY
// const zipperLists = (head1, head2) => {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while(current1 !== null && current2 !== null) {
//     if(count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next
//     count++
//   }

//   if(current1 !== null) tail.next = current1;
//   if(current2 !== null) tail.next = current2;

//   return head1;
// }

// RECURSIVELY
// const zipperLists = (head1, head2) => {
//   if(head1 === null && head2 === null) return null;
//   if(head1 === null) return head2;
//   if(head2 === null) return head1;

//   const next1 = head1.next;
//   const next2 = head2.next;

//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);

//   return head1;
// }
// console.log(zipperLists(a, x))










