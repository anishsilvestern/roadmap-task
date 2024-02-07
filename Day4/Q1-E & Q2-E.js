// // anonymous function

let isPalindromes = function(word) {
    let reverse = ''
       
    for(let i = word.length - 1; i >= 0; i--){
    reverse = reverse + word[i]
    }
    return word === reverse
}

let words = [
    "level",      
    "hello",       
    "racecar",      
    "world",        
    "deified",      
    "apple",       
    "radar",        
    "banana",       
    "civic",        
    "computer"      
];

 let palindromes = [];

for (let word of words) {
    if (isPalindromes(word)) {
        palindromes.push(word);
    }
}

console.log(palindromes)

//-------------------------------------------------------------------------------------------

// // IIFE

console.log((function (words) {
    let palindromes = [];
    for (let word of words) {
        let reverse = '';

        for (let index = word.length - 1; index >= 0; index--) {
            reverse = reverse + word[index];
        }

        if (word === reverse) {
            palindromes.push(word);
        }
    }

    return palindromes;
})([
        "level",      
        "hello",       
        "racecar",      
        "world",        
        "deified",      
        "apple",       
        "radar",        
        "banana",       
        "civic",        
        "computer"      
    ]));


//-------------------------------------------------------------------------------------------

// // Arrow Function

let isPalindromes = (word) => {
    let reverse = '';

    for(i = word.length - 1; i >= 0; i--){
        reverse = reverse + word[i]
    }

    return reverse === word
}

let words = [
    "level",      
    "hello",       
    "racecar",      
    "world",        
    "deified",      
    "apple",       
    "radar",        
    "banana",       
    "civic",        
    "computer"      
];

 let palindromes = [];

 for(let word of words){
    if(isPalindromes(word))
    palindromes.push(word)
 }
 console.log(palindromes)