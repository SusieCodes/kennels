import React, {useState} from "react"
 

export const PropsAndState = ({ yourName, day, theTime }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <div className="username">Welcome, {yourName} </div>

      <div>Today's date is { day }</div>
      {/* <h3>The time is { theTime }</h3> */}

      {/* <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button> */}
      </>
  )
}
