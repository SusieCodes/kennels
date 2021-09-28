import React from "react"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const Location = () => (
  <>
      <h2>Locations</h2>
      <article className="animals">
          <LocationCard />
          <LocationCard />
          <LocationCard />
      </article>
  </>
)