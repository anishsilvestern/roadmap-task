// // anonymous function
   
   let isPrimeNum = function (numbers) { 

      let findPrime = function (nums) {
          if(nums <= 1 )  return false;
            for(let i = 2; i <= Math.sqrt(nums); i++){
                   if(nums % i === 0) return false;
            } 
            return true;
        
      };
       
      return numbers.filter(nums => findPrime(nums));
    

   };



   let numbers = [1, 6, 3, 8, 5, 12, 7, 10, 9, 4];
   let primeNumbers = isPrimeNum(numbers);
      console.log(primeNumbers);

//-----------------------------------------------------------------------------------

// // IIFE 
    
   console.log((function (numbers) { 

      let findPrime = function (nums) {
          if(nums <= 1 )  return false;
            for(let i = 2; i <= Math.sqrt(nums); i++){
                   if(nums % i === 0) return false;
            } 
            return true;
        
      };
       
      return numbers.filter(nums => findPrime(nums));
    

   })([1, 6, 3, 4, 2, 17, 5, 11, 23, 7, 13, 3, 19, 29, 99, 12, 7, 232, 9, 52]))
   
   //-----------------------------------------------------------------------------------

// Arrow Function

let isPrimeNum = (numbers) => {
  let findPrime = function (nums) {
              if(nums <= 1 )  return false;
                for(let i = 2; i <= Math.sqrt(nums); i++){
                       if(nums % i === 0) return false;
                } 
                return true;
            
          };
           
          return numbers.filter(nums => findPrime(nums));
        
    
       }

let numbers = [1, 6, 3, 8, 5, 12, 7, 10, 7, 19, 2, 13, 31, 11, 5, 23, 17, 3, 9, 4];
   let primeNumbers = isPrimeNum(numbers);
      console.log(primeNumbers);


  
 
 
  
   

   