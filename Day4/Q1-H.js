// // anonymous Function 

let arrayRotate = function(array, k) {
    
    for (let i = 0; i < k; i++) {
        let firstValue = array[0];
        
       
        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }
        
        
        array[array.length - 1] = firstValue;
    }
    
    console.log (array);
}

let array = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'pear', 'pineapple'];
let k = 2;

arrayRotate(array, k);

//--------------------------------------------------------------------------------------------------------------

// // IIFE

(function(array, k) {
    
    for (let i = 0; i < k; i++) {
        let firstValue = array[0];
        
       
        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }
        
        
        array[array.length - 1] = firstValue;
    }
    
    console.log (array);
})(['apple', 'banana', 'orange', 'grape', 'kiwi', 'pear', 'pineapple'],k = 2);


