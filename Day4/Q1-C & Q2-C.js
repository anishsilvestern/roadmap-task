// // anonymous function

let sum = function (numbers){
    total = 0;

      for(i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }

    console.log(total);
}

let numbers = [2, 5, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
sum(numbers);

//-----------------------------------------------------------------------------------------------------------------------------------

// // IIFE with anonymous function

(function (numbers){
   total = 0;

    for(i=0; i<numbers.length; i++){
        total = total + numbers[i];
    }
     
    console.log(total)

})([3, 8, 12, 17, 22, 27, 33, 40]);

//-----------------------------------------------------------------------------------------------------------------------------------

// // arrow

let sum = (numbers) => {
    total = 0

     for(i = 0; i < numbers.length; i++){
        total = total + numbers[i];
     }

        console.log(total)

}

let numbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59];

sum(numbers)
















