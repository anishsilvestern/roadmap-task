function Equal(obj1, obj2) {
    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        let value1 = obj1[key];
        let value2 = obj2[key];

        if (value1 === 'object' && value1 !== null && value2 === 'object' && value2 !== null) {
            
            if (!Equal(value1, value2)) {
                return false;
            }
        } else if (value1 !== value2) {
            return false;
        }
    } 

    return true;
}

let obj1 = { name: "person 1", age: 5};
let obj2 = { age: 51, name: "person 1"};

let areEqual = Equal(obj1, obj2);

console.log(areEqual); 