// // anonoymous Function

let removeDuplicateValue = function(duplicateValue) {
    console.log([...new Set(duplicateValue)])
}

let duplicateValue = [3, 5, 2, 3, 7, 9, 5, 4, 2, 8];
removeDuplicateValue(duplicateValue)

// ----------------------------------------------------------------------------------------------------

// // IIFE 

(function(duplicateValue) {
    console.log([...new Set(duplicateValue)])
})(["apple", "banana", "orange", "apple", "grape", "kiwi", "banana", "pear", "orange", "pineapple"]);


