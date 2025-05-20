const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xBtn = document.getElementById("btn-x");
const newQuoteBtn = document.getElementById("new-quote");

const quoteContainer = document.getElementById("quote-container");
const loader = document.getElementById("loader");

function loading() {
  quoteContainer.classList.add("hidden");
  loader.classList.remove("hidden");
}

function loaded() {
  quoteContainer.classList.remove("hidden");
  loader.classList.add("hidden");
}

function selectQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setNewQuote(quote) {
  quoteText.textContent = quote.text;
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  if (quote.author) {
    authorText.textContent = quote.author;
  } else {
    authorText.textContent = "Unknown";
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

loading();

var currentQuote = selectQuote(localQuotes);
setNewQuote(currentQuote);
loaded();

function tweetQuote(quote) {
  const xTwitUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
  window.open(xTwitUrl, "_blank");
}

xBtn.addEventListener("click", function (e) {
  tweetQuote(currentQuote);
});

newQuoteBtn.addEventListener("click", function (e) {
  currentQuote = selectQuote(localQuotes);
  setNewQuote(currentQuote);
});
