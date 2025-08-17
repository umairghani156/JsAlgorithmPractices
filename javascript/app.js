// function minCost(n, m, k) {

// }


// var n = 4, m = 4, k = 6
// console.log(minCost(n, m, k))
// console.log("hh")

// function recur(arr){
//   let arr2 = []

//   arr.forEach(element => {
//     if(Array.isArray(element)){
//      arr2= arr2.concat(recur(element))
//     }else{
//         arr2.push(element)
//     }
//   });

//   return arr2
// }

// console.log(recur([1, 2,[3,4, [5, 6,[7, [8]]]]]))


// function largestNum(arr){
//   let num = arr[0]
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > num){
//         num = arr[i]
//     }
//   }
//   return num
// }
// console.log(largestNum([-4, -40, -2, -8]))

// function missingNum(arr){
//     let arr2 = []
//   for(let i = 0; i < arr.length; i++){
//     if(!arr.includes(arr[i] + 1) ){
//         arr2.push(arr[i] + 1)
//     }

//   }
//   return arr2.shift()
// }

// console.log(missingNum([2, 3, 4, 5]))

// for(let i =0; i <= 5; i++){
//   for(let j = 5; j >= 0; j--){
//     process.stdout.write("* ")

//   }

//   console.log()
// }

// let arr = [ 10, 5, 1, 8, 13, 7]; //5,10
// let n = arr.length;

// for(let i = 0; i < n -1; i++){ // 10
//   for(let j = 0; j < n -1 - i ; j++){ // 5-0
//    if(arr[j] > arr[j + 1]) {
//     let temp = arr[j];
//     arr[j] = arr[j+ 1];
//     arr[j+1] = temp
//    }
//   }
// };
// console.log(arr)

// let arr = [12, 10, 7,  8, 9, 18, 16];
// let n = arr.length;

// for(let i = 0; i < n -1; i++){ // 0 / 6
//   for(let j = 0; j < n- 1 - i; j++){
//     if(arr[j] > arr[j+1]){
//       let temp = arr[j];
//       arr[j] = arr[j+ 1];
//       arr[j+1] = temp
//     }
//   }
// };
// console.log(arr)

// let arr = [10, 5, 12, 1, 3];
// let n = arr.length;
// for(let i=0; i < n-1; i++){
//   let minIndex = i;
//   console.log("Min", minIndex, i);
//   for(let j = i + 1; j < n; j++){
//     if(arr[minIndex] > arr[j]) minIndex = j
//   }
//   if(minIndex != i){
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp
//   }
// }
// console.log(arr)

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//     process.stdout.write("* ")
//   }
//   console.log()
// }

// for(let i = 1; i <= 10; i++){
//   for(let j = 10; j >= i; j--){
//     process.stdout.write(" ")
//   }
//   for(let j = 1; j <= i; j++ ){
//         process.stdout.write(" *")
//   }
//   console.log()
// }

// for(let i = 1; i <= 5; i++){
//   for(let j = 5; j >= i; j--){
//     process.stdout.write("  ")
//   }
//   for(let j = 1; j <= i; j++){
//     process.stdout.write(" *")
//   }
//   console.log()
// }

// for(let i = 0; i <= 5; i++){
//    for(let j = 0; j < i; j++){
//      process.stdout.write(" *")
//    }
//    for(let j = 0; j < i; j++){
//       process.stdout.write(" h")
//    }
//    console.log();

// }


// for(let i = 1; i <= 5; i++ ){
//   for(let j = 1; j <= 5; j++){
//     if(i == j || i + j == 5 + 1){
//     process.stdout.write(" " + j)
//     }else{
//     process.stdout.write("  ")
//     }
//   }
//   console.log()
// }



// let n = 5

// for(let i = 1; i <= n; i++ ){
//   let ascii = 65
//   for(let j = 1; j <= i; j++){
//     process.stdout.write(" " + String.fromCharCode(ascii))
//     ascii++
//   }
//   console.log()
// }
// let n = 10;
// for(let i = 1; i < n; i++){
//   for(let j = n; j > i; j--){
//     process.stdout.write(" ")
//   }
//   for(let j = i; j >= 1; j--){
//     process.stdout.write(" *")
//   }

//   console.log()
// }

// let n = 5;

// for(let i = 1; i <= n; i++){
//    for(let j = 1; j <= n; j++){
//     if(i == j || j+ i == n + 1){
//     process.stdout.write(" *")
//     }else{
//       process.stdout.write("  ")
//     }
//    }
//    console.log()
// }

//Left rotation by 1
// let arr = [20, 30, 40, 50, 60];
// let n = arr[0];
// //n = n % arr.length -1
// for(let i =0; i < arr.length -1; i++){
//     console.log(arr[i])
//     arr[i] = arr[i + 1]

// }
// arr[arr.length] = n
// console.log(arr)

// let arr = [10, 5, 1, 12, 3];
// let n = arr[0];

// for(let i = 0; i < arr.length -1 ; i++){
//     for(let j =0; j < arr.length -1 - i; j++){
//        if(arr[j] > arr[j + 1]){
//         let temp = arr[j]
//         arr[j] = arr[j + 1];
//         arr[j + 1]= temp
//        }
//     }
//    console.log(arr[i])
// };
// console.log(arr)

// let arr = [3, 2, 10, 12, 15, 4]; // 3

// let n = arr.length;

// for(let i = 0; i < n -1; i++){
//     for(let j =0; j < n -1 - i; j++){
//         if(arr[j + 1] < arr[j]){
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j+ 1] = temp
//         }
//     }
// }
// console.log(arr)

// let arr = [ 1, 2, 3, 10, 12, 6, 5];

// let n = arr.length;

// for(let i = 0; i < n -1; i++){
//    for(let j = 0; j < n - 1; j++){
//       if(arr[j] < arr[j + 1]){
//         let temp = arr[j];
//      arr[j] = arr[j + 1];
//      arr[j + 1] = temp

//       }
//    }
// }
// console.log(arr)

// let arr = [1, 2, 10, 20, 13, 14, 18, 19];

// let n = arr.length;
// let dubArr = [];

// for(let i = 0; i < n; i++){
//     if(arr[i] % 2 !== 0){
//         dubArr.push(arr[i])
//     }
// }
// console.log(dubArr)

// let arr = [1, 2, 10, 20, 13, 14, 18, 19];

// let maxNum = arr[0];
// let n = arr.length;
// for(let i =0; i < n; i++){
//     if(maxNum > arr[i]){
//         maxNum = arr[i]
//     }
// };

// console.log(maxNum)

//let arr = [1, 2, 10, 20, 13, 14, 18, 19];

// let maxNum = Math.max(arr[0], arr[1]);
// let minNum = Math.min(arr[0], arr[1]);
// let min = arr[0];
// let max = arr[0]
// let n = arr.length;
// for(let i = 0; i < n; i++){
//     if( min > arr[i] ){
//         min = arr[i]
//     }
//     else if(max < arr[i]){
//         max = arr[i]
//     }
// };
// console.log(min, max)

// Selection Sort

// let arr = [1, 2, 3, 4, 5]

// let n = arr.length % 4
// console.log(arr[n])

// let arr = [10, 5, 3];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   let minIndex = i; // 0 / 1 / 2
//   for (let j = i + 1; j < n; j++) {

//     if (arr[minIndex] > arr[j]) minIndex = j



//   }
//   if (minIndex != i) {
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp
//   }
// }
// console.log(arr)


// let arr = [10, 12, 9, 7, 70, 100];
// let n = arr.length;

// for(let i = 0; i < n -1; i++){
//   let minIndex = i;
//   for(let j = i + 1; j < n; j++){
//     if(arr[minIndex] > arr[j]) minIndex = j
//   }

//   if(minIndex != i){
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i]
//     arr[i] = temp

//   }
// }

// for(let i = 0; i < n; i++){
//   for(let j = 0; j < n -1 -i; j++){
//     if(arr[j] < arr[j+1]){
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j+ 1] = temp

//     }
//   }
// }
// console.log(arr);

// let arr = [10, 12, 9, 7, 70, 100];
// let n = arr.length;

// for(let i = 0; i <= n; i++){
//   let index = arr[0]
//    for(let j = i + 1; j < n - 1 - i; j++){
//      if(index > arr[j + 1]){
//        newArr.push(arr[j + 1])
//        index = arr[j + 1]

//      }
//    }
//    if(index != arr[i]){
//     let temp = index;
//     index = arr[i]
//     arr[i] = temp
//    }
// }

//console.log(newArr)

// let arr = [10, 12, 9, 7, 70, 100];
// let copy = arr[arr.length -1]
// let n = arr.length;

// let arr2 = []
// for(let i = 0; i < n; i++){
//   for(let j = 0; j < n-1-i; j++){
//     if(arr[j] > arr[j + 1]){

//     }
//   }
// }
// console.log(arr2)

// Left Rotation by One Step

// for(let i = n-1; i > 0 ; i--){
//     arr[i] = arr[i - 1]
// }
// arr[0] = copy
// console.log(arr)


// for(let i =1; i < 4; i++){
//   console.log("Outer Loop", i);
//   for(let j = 0; j < 4; j++){
//     console.log("Inner", j)
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length
// let copyOne = arr[0];
// let copyTwo = arr[1];

// for(let i =0; i <= n; i++){

// }

// arr[arr.length -1] = copyOne;
// arr[arr.length -2] = copyTwo;

// console.log(arr)

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let k = 2
// k = k % arr.length;
// for (let j = 0; j < k; j++) {

//     let copy = arr[0];
//     for (let i = 0; i < n - 1; i++) {
//         arr[i] = arr[i + 1]
//     };
//     arr[arr.length - 1] = copy;
// }



// console.log(arr)



// Home For Right Rotation 
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;

// for(let i = 0; i < 3; i++){
//     let copy = arr[0];
//     for(let j = 0; j < n - 1; j++){
//         arr[j] = arr[j+1]
//     };
//     arr[arr.length - 1] = copy
// }
// console.log(arr);

//Need to understand clearly

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let k = 2;
// let temp = new Array(arr.length)

// for(let i = 0; i < n; i++){
//     temp[i] = arr[(i+k) % arr.length]
//     console.log(arr[(i+k) % arr.length])
// };
// console.log(temp);

// let arr = [1, 2, 3, 4, 5,19, 20];
// let n = arr.length;
// let k = 3;
// let temp = new Array(arr.length)

// for(let i =0; i < n; i++){
//     temp[(i + k) % arr.length] = arr[i]
// };

// console.log(temp)


// Without extra space

// let arr =  [1, 2, 3, 4, 5];

// let k = 3

// reverse(0, k-1);
// reverse(k, arr.length -1);
// reverse(0, arr.length-1)
// function reverse(i, j){
//     while(i < j){
//      let temp = arr[i];
//      arr[i] = arr[j];
//      arr[j] = temp;
//      i++
//      j--

//     }
// }

// console.log(arr)

// let arr = [1,2, 3, 4, 5];
// let maxNum = Math.max(arr[0],arr[1]);
// let lastNum = Math.min(arr[0],arr[1]);
// let minNum = Math.min(arr[0],arr[1]);

// for(let i =0; i < arr.length; i++){
//    for(let j =i; j < arr.length; j++){
//     if(arr[j] > maxNum){
//         maxNum = arr[j]
//         lastNum = arr[j-1]
//     }
//     if(arr[j] < minNum){
//         minNum = arr[j]
//     }
//    }
// }
// console.log(maxNum, lastNum, minNum)





// let n = 5;

// // for(let i =0; i < n;i++){

// //      for(let j =i; j < n; j++){
// //      process.stdout.write(" ")
// //      }
// //       for(let j =0; j <=i; j++){
// //      process.stdout.write(" *")
// //      }
// //      console.log()
// // }



let person = [
    {
        name: "Umair",
        age: "25",
        subject: "Urdu",
    },
     {
        name: "Ahmed",
        age: "26",
        subject: "English",
    },
     {
        name: "Faiz",
        age: "24",
        subject: "Arabic",
    },
     {
        name: "Omar",
        age: "24",
        subject: "French",
    },
];

let newArr = person[0]
for(let i = 0; i < person.length; i++){
    const oldInd = 0
    if(i === 0){
        person[i] = person[i + 1]
        person[i + 1] = newArr
    }
    
}

console.log(person)













