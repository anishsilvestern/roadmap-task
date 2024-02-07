// // anonymous function

 let oddNumbers = function(numbers){
    
        for(i = 0; i < numbers.length; i++){

            if(numbers[i] % 2 !== 0){
                console.log(numbers[i]);
            } 
        } 
 }
   
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
oddNumbers(numbers);

//-----------------------------------------------------------------------------------------------------------------------------------

// // IIFE with arrow function

((numbers) => {

    for(i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            console.log(numbers[i]);
        }
    }
})([1, 6, 3, 8, 5, 12, 7, 10, 9, 4]);

//-----------------------------------------------------------------------------------------------------------------------------------

// // arrow function

let oddNumbers = (numbers) => {

    for(i = 0; i < numbers.length; i++){
                
        if(numbers[i] % 2 !== 0){
            console.log(numbers[i]);
                }
            }
        }
       
 let numbers = [1, 6, 3, 8, 5, 12, 7, 10, 9, 4, 15, 18, 21, 14, 17, 20, 23, 16, 25, 2, 19, 22, 11, 24];

 oddNumbers(numbers)









