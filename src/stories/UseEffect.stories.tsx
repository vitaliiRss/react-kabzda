import React, { useEffect, useState } from "react"

export default {
  title: "useEffect stroies"
}

export const useEffectExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)
  console.log("useEffect");

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  })

  useEffect(() => {
    console.log("useEffect only first render");
    document.title = counter.toString();
  }, [])

  useEffect(() => {
    console.log("useEffect only first render and every counter change");
    document.title = counter.toString();
  }, [counter])

  return (
    <>
      <button onClick={() => { setFake(fake + 1) }}>fake</button> {fake}
      <button onClick={() => { setCounter(counter + 1) }}>counter</button> {counter}
    </>
  )
}