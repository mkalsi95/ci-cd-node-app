const quotes = [
  "Push to production on Fridays. What could go wrong?",
  "There is no cloud, it's just someone else's computer.",
  "CI/CD is like brushing your teeth — do it every day."
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

module.exports = { getRandomQuote };