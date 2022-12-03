logData()

async function logData() {
  var figureElement = document.querySelector('figure');
  var data = await fetchData()
  var quoteElement = document.querySelector('#quote')
  var authorElement = document.querySelector('#author')
  quoteElement.innerText = data.quote
  authorElement.innerText = data.author
  figureElement.classList.add('active')
}
async function fetchData() {
  var randomNumber = Math.floor(Math.random() * 100)
  var response = await fetch('https://dummyjson.com/quotes/' + randomNumber)
  var data = await response.json()
  return data
}