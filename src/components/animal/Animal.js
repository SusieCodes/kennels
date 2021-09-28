import React from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const Animal = () => (
  <>
      <h2>Animals</h2>
      <article className="animals">
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
      </article>
  </>
)