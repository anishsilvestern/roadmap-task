// // anonymous function

    let stringCaps = function(strings) {
    
       let titleCapsArray = strings.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1));

       console.log(titleCapsArray)
        
    }


    let strings = ["apple", "banana", "orange", "grape", "kiwi"];
    stringCaps(strings)

//------------------------------------------------------------------------------------------------------------------------------------------    

// // IIFE with anonymous function

(function(strings) {
    let titleCapsArray = strings.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1));

    console.log(titleCapsArray);
})(["apple", "banana", "orange", "grape", "kiwi", "melon", "peach", "strawberry", "blueberry", "pineapple"]);

// //------------------------------------------------------------------------------------------------------------------------------------------   

// // // arrow function

let stringCaps = (strings) => {
    let titleCapsArray = strings.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1))

         console.log(titleCapsArray)
}

let strings = ["hello", "world", "javascript", "programming", "openai", "chatbot", "array", "function", "algorithm", "variable"];
stringCaps(strings)

