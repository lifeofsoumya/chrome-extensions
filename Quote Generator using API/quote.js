const   quote = document.getElementById('quote'),
        quoteTag =document.getElementById('quote-tag'),
        author = document.getElementById('author'),
        newQuoteBtn = document.getElementById('quote-btn');

function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data=> {
        quote.textContent = data.content;
        quoteTag.textContent = data.tags;
        author.textContent = `-${data.author}`;
    })

}

randomQuote();
newQuoteBtn.addEventListener("click", randomQuote);