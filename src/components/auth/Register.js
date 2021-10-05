import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import "./Login.css"

export const Register = ({setAuthUser}) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const phoneNumber = useRef()
    const address = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:5002/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            phoneNumber: `${phoneNumber.current.value}`,
                            address: `${address.current.value}`,
                            image: ""
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1>Please Register</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input ref={address} type="text" name="address" className="form-control" placeholder="Address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPhone"> Phone Number </label>
                    <input ref={phoneNumber} type="text" name="phoneNumber" className="form-control" placeholder="XXX-XXX-XXXX" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email Address </label>
                    <input ref={email} type="text" name="email" className="form-control" placeholder="Email Address" required />
                </fieldset>
                <fieldset className="sign-up">
                    <button type="submit"> Sign Up </button>
                    <Link to="/login"><button type="button">Cancel</button></Link>
                </fieldset>
            </form>
        </main>
    )
}

