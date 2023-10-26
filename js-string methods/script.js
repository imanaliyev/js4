// 12===========================================

// function ayiran(num) {
//     const numbers = []
//     let number = num.toString()
//     for (let i = 0; i < number.length; i++) {
//         numbers.push(number[i])

//     }
//     return numbers
// }
// console.log(ayiran(2123));
// 13====================================================
// function biggestDigit(text) {
//     text = text.toString()
//     big = text[0]
//     for (let i = 0; i < text.length; i++) {
//         if (big < text[i]) {
//            big = text[i]

//         }

//     }

//     return big

// }
// console.log(biggestDigit(123645));
// 14====================================================
// function smallestDigit(text) {
//         text = text.toString()
//         small = text[0]
//         for (let i = 0; i < text.length; i++) {
//             if (small > text[i]) {
//                small = text[i]

//             }

//         }

//         return small

//     }
//     console.log(smallestDigit(123645));
// 15===========================================================
// function onbes(text) {
//     let textstring = text.toString()
//     const arr = textstring.split("")
//     let avrg = 1
//     let sum = 0
//     let multp = 1
//     const result =[]

//     for (let i = 0; i < arr.length; i++) {

//         sum += +arr[i]
//         multp *= +arr[i]
//         avrg = sum / arr.length


//     }
//     result.push(sum)
//     result.push(multp)
//     result.push(avrg)
//  return result
// }
// console.log(onbes(12312));
// 16===============================================================
// function findBolen(num) {
//     const bolen = []
//     for (let i = 0; i < num ; i++) {
//         if (num%i === 0) {
//             bolen.push(i)


//         }


//     }
//     return bolen
// }
// console.log(findBolen(10));
// 17============================================================
// function findBolenSay(num) {
//     const bolen = []
//     for (let i = 0; i < num ; i++) {
//         if (num%i === 0) {
//             bolen.push(i)


//         }


//     }
//     return bolen.length
// }
// console.log(findBolenSay(20));
// 18========================================================

// function findBolenSay(num) {
//     let bolenHasil = 1
//     let bolenSum = 0
//     let result = []
    
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {

//             bolenHasil *= i
//             bolenSum += i
            


//         }
        


//     }
//     result.push(bolenHasil,bolenSum)

//     return result
// }
// console.log(findBolenSay(20));
// 20========================================================================================
// function finder(num) {
// let isPrime =true
// for (let i = 2; i < num; i++) {
//     if (num % i ===0) {
//         return "murekkeb edetdir"
//     }

    
// }
// if (isPrime) {
//     return "number is prime"
    
// }
   
// }
// console.log(finder(13));
