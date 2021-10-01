import React from "react"
import "./../../cards.css"

export const QuoteCard = ({ quote }) => {
  console.log(quote);
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