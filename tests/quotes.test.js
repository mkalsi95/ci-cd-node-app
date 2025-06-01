const { getRandomQuote } = require('../quotes');

test('getRandomQuote returns a string', () => {
  const quote = getRandomQuote();
  expect(typeof quote).toBe('string');
});
