let myDate = new Date() // object

console.log(myDate.toISOString()) // O/P -> 2025-08-18T13:47:12.006Z 
console.log(myDate.toString()) // O/P -> Mon Aug 18 2025 19:18:34 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()) // O/P-> Mon, 18 Aug 2025 13:49:16 GMT
console.log(myDate.toDateString()) // O/P -> Mon Aug 18 2025
console.log(myDate.toLocaleDateString()) // O/P -> 8/18/2025
console.log(myDate.toLocaleString()) // O/P -> 8/18/2025, 7:20:45 PM


let myCreatedDate = new Date(2024, 0, 54)
console.log(myCreatedDate.toDateString()) // o/p -> Fri Feb 23 2024
// wheen the date is more than 30 or 31 it automatically moved to next month

const time = Date.now();
console.log(time); //return time passed in microseconds from 01-01-1970
// to get time in seconds I just divide time/1000 but also it gives decimal values to resolve this use Math.floor()