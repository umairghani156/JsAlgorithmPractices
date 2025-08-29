let state = {
  count: 0
};

function stateUpdater(){
  return state = {
    ...state,
    count: state.count + 1
  }
}

console.log(stateUpdater)

// function debounceTimer(fn, delay){
//     let timer;
//     return function (...arg){
//         clearTimeout(timer)
//         timer = setTimeout(()=>{
//             fn(...arg)
//         }, delay)
//     }
// }
// function debounceFunc(e){
//    console.log("Press :", e.target.value)
// }

// const resultDebounce = debounceTimer(debounceFunc, 1000);


// Throttle 

// function throttleTimer(fn, delay){
//     let lastCall = 0;

//     return  function (...arg){
//         const now = Date.now();
//         console.log("now", now - lastCall, now, "delay", delay, "lastCall", lastCall)
//         if(now - lastCall < delay){
//             return
//         }
//         lastCall = now;
//         fn(...arg)
//     }
// }


// function throttleFunc(e){
//    console.log("Press :", e.target.value)
// }


// const resultThrottle = throttleTimer(throttleFunc, 1000);


// var deleteDuplicates = function(head) {
//     const sortedArr = new Set(head);
//     return [...sortedArr];
// };

// console.log(deleteDuplicates([1,1,20]))

// function removeDuplicates(arr) {
//   if (arr.length === 0) return [];

//   let i = 0; 
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
  
//   return arr.slice(0, i + 1);
// }

// console.log(removeDuplicates([1, 1, 2, 3, 3])); 
// [1, 2, 3]


// Singly Linked List Node definition
// function ListNode(val, next = null) {
//   this.val = val;   // Node ka value
//   this.next = next; // Next node ka pointer
// }

// // Function to remove duplicates from sorted list
// function deleteDuplicates(head) {
//   let current = head;

//   while (current && current.next) {
//     if (current.val === current.next.val) {
//       // Duplicate mila → skip karo
//       current.next = current.next.next;
//     } else {
//       // Nahi mila → aage badho
//       current = current.next;
//     }
//   }

//   return head;
// }

// // Helper function: Array → Linked List
// function arrayToList(arr) {
//   if (arr.length === 0) return null;
//   let head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

// // Helper function: Linked List → Array (output ke liye)
// function listToArray(head) {
//   let result = [];
//   let current = head;
//   while (current) {
//     result.push(current.val);
//     current = current.next;
//   }
//   return result;
// }

// // =============================
// // Example Test Cases
// // =============================
// let head1 = arrayToList([1, 1, 2]);
// let result1 = deleteDuplicates(head1);
// console.log(listToArray(result1)); // [1, 2]

// let head2 = arrayToList([1, 1, 2, 3, 3]);
// let result2 = deleteDuplicates(head2);
// console.log(listToArray(result2)); // [1, 2, 3]

// console.log(this)


// function show(){
//     console.log(this);
    
// }
// show()

// const show2 = () =>{
//     console.log(this);
    
// }
// show2()


// const obj = {
//     name: "Umair",
//     age: 24,
//     mthod: function show(){
//         console.log(this.name)
//     }
// }
// console.log(obj.mthod())

// const obj2 = {
//     name: "Umair",
//     age: 24,
//     mthod:  () =>{
//         console.log(this)
//     }
// }
// console.log(obj2.mthod())


// function Listnode(value, next = null){
//     this.value = value;
//     this.next = next;

// }

// let node = new Listnode(5)
// console.log(node.value)


// function hello(str){
//     console.log(str + " "+this.name)
// }

// const user = {
//     name: "Umair",
//     age: 24
// }
// console.log(hello.call(user, "Hello"));


// let arr = [1, 2, 3, 6,6,6, 5, 4];


// function hello(numArr){
//     const unqueNumbers = [... new Set(numArr)];
//     console.log(unqueNumbers)
//     let index = 0
//     let arrLeftSide = []
//     for(let i = 0; i < unqueNumbers.length; i++){
//        for(let j = i; j < unqueNumbers.length - 1; j++){
//           if(unqueNumbers[i] > unqueNumbers[j]){
//               console.log(unqueNumbers[i], i)
//               index = i
//           }
//        }

//     }

//     for(let i = index; i < unqueNumbers.length; i++){
//         arrLeftSide.push(unqueNumbers[i])
//     }

//     console.log("Unique",arrLeftSide)
// }

// hello(arr)


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); 
let arr = ["Umair","Akmal","Mehmood"]







