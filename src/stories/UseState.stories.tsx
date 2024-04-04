import React, { useState } from "react"

export default {
  title: "useState stroies"
}

function generateData() {
  console.log("generateData");
  return 432423432432;
}

export const useStateExample = () => {
  console.log("Example 1");

  const [counter, setCounter] = useState(generateData) // 432423432432 будет вызвано 1 раз

  return (
    <>
      <button onClick={() => { setCounter(state => { return state + 1 }) }}>+</button> {counter}
    </>
  )
}