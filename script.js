logData()

async function logData() {
  var data = await fetchData()
  var quoteElement = document.querySelector('#quote')
  var authorElement = document.querySelector('#author')
  quoteElement.innerText = data.quote
  authorElement.innerText = data.author
}
async function fetchData() {
  var randomNumber = Math.floor(Math.random() * 100)
  var response = await fetch('https://dummyjson.com/quotes/' + randomNumber)
  var data = await response.json()
  return data
}