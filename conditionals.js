// Maximum number
function max(a,b){
    return Math.max(a,b);
}
// ****OR****
// if we want to pass in an array of numbers as an argument
// function max(arr) {
//     var max = arr[0];

//     Using a For loop
//     for(var i = 1; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
        // Using forEach
//     // arr.forEach(function (loop){
//     //     if(max < loop){
//     //         max = loop;
//     //     }
//     // });

//     return max;
// }


// Function that returns 'true' if integer is even, and 'false' if odd
function isEven(num) {
    return num % 2 === 0;
}