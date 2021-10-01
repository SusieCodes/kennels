export const getAllQuotes = () => {
return fetch(`https://type.fit/api/quotes`)
  .then(res => res.json())
}

export const getRandomQuote = (arr) => {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log("randomIndex is: " + randomIndex)
  // get random item
  const singleQuote = arr[randomIndex];
  console.log("singleQuote is: " + singleQuote)
  return singleQuote;
}
