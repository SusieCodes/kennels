import React, { useState, useEffect } from "react";
import { PropsAndState } from './components/PropsAndState'
import { QuoteList } from './components/quote/QuoteList'
import { getRandomId } from './modules/AnimalManager'
import { AnimalSpotlight } from "../src/components/animal/AnimalSpotlight"

const date = new Date();
let todaysDate = date.toDateString();
let theTime = date.toLocaleTimeString();
console.log(todaysDate);
console.log(theTime);

export const Home = ({isAdmin}) => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId);
    };

    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);

    return (
    <>
    <div className="home__flex">
        <div className="home__flex--inner">

            <div className="col1 colspacer">
                <div className="col1__inner">

                    <div className="headline">Cohort 51 Dog Grooming</div>
                    <div className="subtitle">Let us make your furbaby beautiful!</div>

                    <div className="welcome">
                        <PropsAndState yourName={"Susie"} day={todaysDate} time={theTime}/>

                        {/* {isAdmin ?
                        <div>You are an Admin</div> 
                        : <div>You are an not an Admin</div>} */}

                    </div>

                    <div className="quote-list">
                    <QuoteList />
                    </div>

                </div>
            </div>

            <div className="col2 colspacer">
                <div className="spotlight">

                    <div className="spotlight-headline">Animal Spotlight</div>

                    {
                    spotlightId && <AnimalSpotlight animalId={spotlightId} />
                    }

                    <div className="spotlight-btn">
                        <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
</>
    
    )
}
