import React, { useState, useEffect } from 'react';
import { QuoteCard } from './QuoteCard';
import { getAllQuotes, getRandomQuote } from '../../modules/QuoteManager';



export const QuoteList = () => {
  // The initial state is an empty array
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  const getQuotes = () => {
    // After the data comes back from the API, we
    //  use the setQuotes function to update state
    return getAllQuotes().then(quotesFromAPI => {
      setQuotes(quotesFromAPI)
    });
  };

  const pickNewQuote = () => {
    setRandomQuote(getRandomQuote(quotes) || {});
    console.log("randomQuote inside pickNewQuote is: ", randomQuote);
  }

  // got the quotes from the API on the component's first render
  useEffect(() => {
    getQuotes();
  }, []); //will never rerun because array is empty

  useEffect(() => {
    getRandomQuote();
  }, [quotes]);


    return(
      <>
      {console.log("quotes in the return is: ", quotes)}
        <div className="quote__card">
          {quotes.length > 0 ? 
            <QuoteCard quote={randomQuote} />
            : <p>Loading Quote...</p>
          }
        </div>
        <button onClick={pickNewQuote}>Get New Quote</button>
    </>
    )
};
