fetchData();

async function fetchData() {
    var figureElement = document.querySelector('figure');
    var quoteElement = document.querySelector('#quote');
    var authorElement = document.querySelector('#author');
    var randomNumber = Math.floor(Math.random() * 100);
    var response = await fetch('https://dummyjson.com/quotes/' + randomNumber);
    var data = await response.json();
    quoteElement.innerText = data.quote;
    authorElement.innerText = data.author;
    figureElement.classList.add('active');
}
