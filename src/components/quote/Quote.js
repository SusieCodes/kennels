import React, { useState, useEffect } from 'react';
import "../../../src/cards.css"
import "../../../src/components/Kennel.css"
import { getAllQuotes } from '../../modules/QuoteManager';


export const QuoteBox = () => {
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
    <div className="quote__content">
      

      <div className="quote__content--title"><strong>Quote Of The Day</strong></div>

      <div className="quote__content--text"><strong>{quote.text}</strong></div>

      <div className="quote__content--author"> - {quote.author}</div>

  
    </div>
  </section> 
  )

}