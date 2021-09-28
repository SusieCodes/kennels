import React from "react"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const Customer = () => (
  <>
      <h2>Customers</h2>
      <article className="animals">
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
      </article>
  </>
)