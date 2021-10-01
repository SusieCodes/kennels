import React from "react";
import { PropsAndState } from './components/PropsAndState'
import { QuoteList } from './components/quote/QuoteList2'

const date = new Date();
let todaysDate = date.toDateString();
let theTime = date.toLocaleTimeString();
console.log(todaysDate);
console.log(theTime);

export const Home = ({isAdmin}) => {
    return (
    <>
    <div className="home__flex">

        <div className="col1">
            <div className="col1__inner">

                <div className="headline">Cohort 51 Dog Grooming</div>
                <div className="subtitle">Let us make your furbaby beautiful!</div>

                <div className="welcome">
                    <PropsAndState yourName={"Susie"} day={todaysDate} time={theTime}/>

                    {isAdmin ?
                    <div>You are an Admin</div> 
                    : <div>You are an not an Admin</div>}

                </div>

                <div className="quote-list">
                <QuoteList /></div>
                <div className="quote-button">
                </div>

            </div>
        </div>

        <div className="col2">
            <img src={require(`./images/homepagepic.png`).default} alt="cute dog with sign" />
        </div>

    </div>
    </>
    
    )
}
