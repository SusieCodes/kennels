import React from "react"
import "./Customer.css"

export const CustomerCard = () => (
    <section className="customer">
        <h3 className="customer__name">Customer Name</h3>

        <address className="customer__address">
            <div>123 Main St</div>
            <div>Anytown, TN 37064</div>
        </address>

    </section>
)