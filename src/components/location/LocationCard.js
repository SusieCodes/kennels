import React from "react"
import "./Location.css"

export const LocationCard = () => (
    <section className="location">
        <h3 className="location__name">Location Name</h3>

        <address className="location__address">
            <div>500 Puppy Way</div>
            <div>Nashville, TN 37064</div>
        </address>

    </section>
)