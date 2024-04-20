import React, { useEffect, useState } from "react"

export default {
  title: "useEffect stroies"
}

export const UseEffectExample = () => {
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

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1)

  console.log("component rendered " + counter);

  useEffect(() => {
    console.log("useEffect occured " + counter);

    return () => {
      console.log("reset effect " + counter);

    }
  }, [counter])

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      Hello, counter {counter}
      <button onClick={increase}>counter</button>
    </>
  )
}

export const KeysTrackerExample = () => {
  const [text, setText] = useState("")

  console.log("component rendered " + text);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      setText(text + e.key)
    }

    window.addEventListener("keypress", keyPressHandler)

    return () => {
      window.removeEventListener("keypress", keyPressHandler)
    }
  }, [text])

  return (
    <>
      Type text: {text}
    </>
  )
}

export const SetTimeoutExample = () => {
  const [text, setText] = useState("")

  console.log("component rendered " + text);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setText("3 seconds passed")
    }, 3000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [text])

  return (
    <>
      Type text: {text}
    </>
  )
}