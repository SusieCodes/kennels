import React, { useState, useEffect } from 'react';
import "../../cards.css"
import { getAllQuotes } from '../../modules/QuoteManager';


export const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState([]);

  const getQuotes = () => {
    return getAllQuotes().then(response => {
      setQuotes(response);
    })
  }

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() *quotes.length);
    setQuote(quotes[randomIndex] || {})
  }
 
  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    randomQuote();
  }, [quotes]);

  return (
    <section className="page__card">
    <div className="quote__card">
      

      <div className="quote__content--title"><strong>Quote Of The Day</strong></div>

      <div className="quote__content--text"><strong>{quote.text}</strong></div>

      {quote.author ?
        <div className="quote__content--author"> - {quote.author}</div>
        : <div className="quote__content--author"> - Anonymous</div>}
      <div className="quote-button">
        <button onClick={(randomQuote)}>Get New Quote</button>
      </div>
      
    </div>
  </section> 
  )

}