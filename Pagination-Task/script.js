
    let heading = document.createElement('h1');
    heading.setAttribute('id', 'heading');
    heading.innerText = "Pagination Task"
    document.body.appendChild(heading)

    let paginationDiv = document.createElement('div');
    paginationDiv.setAttribute('class', 'pagination');
    document.body.appendChild(paginationDiv)



    let XMLhttpRequest = require('xhr2')

    let xhr = new XMLhttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');

    xhr.send();

    xhr.onload = function() {
        let ids = JSON.parse(xhr.responseText);



    }

    pageNumberFunction(ids) 
    
    
    let firstDiv = document.createElement('div');
    firstDiv.setAttribute('class', 'col');
    paginationDiv.appendChild(firstDiv)

    let first = document.createElement('button');
    first.innerText = "First";
    firstDiv.appendChild(first)

    let numberDiv = document.createElement('div');
    numberDiv.setAttribute('class', 'col');
    paginationDiv.appendChild(numberDiv)

    

    function pageNumberFunction(ids) {
        for(let i = 1; i <= ids.length; i++){
            let pageNumber = document.createElement('button');
            pageNumber.innerText = i;
            numberDiv.appendChild(pageNumber);

        }
    }