var nextElement = document.querySelector('#new-quote');
var figureElement = document.querySelector('figure');

fetchData();

nextElement.addEventListener('click', ()=>{
    figureElement.classList.remove('active');
    fetchData();
});

async function fetchData() {
    var quoteElement = document.querySelector('#quote');
    var authorElement = document.querySelector('#author');
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    try {
        var response = await fetch('https://dummyjson.com/quotes/' + randomNumber);
        var data = await response.json();
        quoteElement.innerText = data.quote;
        authorElement.innerText = data.author;
        figureElement.classList.add('active');
    } catch(error) {
        quoteElement.innerText = 'I am only here because an error occurred';
        authorElement.innerText = 'Sir Unfortunate Error';
        figureElement.classList.add('active');
        console.log(error.message);
    }
}
