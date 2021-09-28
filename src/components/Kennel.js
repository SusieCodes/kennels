import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

const isAdmin = true;

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews isAdmin = {isAdmin}/>
    </>
)

