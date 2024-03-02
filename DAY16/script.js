let h1 = document.createElement('h1');
h1.textContent = "CALL BACK HELL TASK";
h1.classList.add('container-fulid', 'header');
document.body.appendChild(h1);

let paraNumber = document.createElement('p');
paraNumber.setAttribute('id','paranumber');




let ten = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "10";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let nine = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "9";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let eight = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "8";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let seven = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "7";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let six = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "6";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let five = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "5";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let four = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "4";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let three = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "3";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let two = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "2";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let one = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "1";
        document.body.appendChild(paraNumber);
        callback();}, 1000);
}

let happy = function(callback) {
    setTimeout (() => {
        paraNumber.textContent = "Happy Independence Day";
        paraNumber.setAttribute('id', 'happy')
        document.body.appendChild(paraNumber);
        }, 1000);
}
  
let functionCall = ten(function () {
                        nine(function () {
                            eight(function() {
                                seven(function() {
                                    six(function() {
                                        five(function() {
                                            four(function() {
                                                three(function() {
                                                    two(function() {
                                                        one(function() {
                                                            happy()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })        
                        })
                    })







