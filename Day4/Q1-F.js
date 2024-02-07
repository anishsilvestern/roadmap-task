// // anonymous function

let isMediam = function(array1,array2){
    let mergedArray = [...array1, ...array2].sort((a,b) => a - b);
        length = mergedArray.length;
            if(length % 2 === 0) {
                let midIndex = length / 2 ;
                return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2
            } else {
                midIndex = Math.floor(length / 2)
                    return mergedArray[midIndex]
                
            }

}

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 10, 8];

let results = isMediam(array1,array2);

console.log(results)

// ------------------------------------------------------------------------------

// //  IIFE

console.log(  (function(array1,array2){
    let mergedArray = [...array1, ...array2].sort((a,b) => a - b);
        length = mergedArray.length;
            if(length % 2 === 0) {
                let midIndex = length / 2 ;
                return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2
            } else {
                midIndex = Math.floor(length / 2)
                    return mergedArray[midIndex]
                
            }

})([1, 3, 5, 7, 9],[2, 4, 6, 10, 8]))




