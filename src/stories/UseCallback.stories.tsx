import React, { useCallback, useMemo, useState } from "react"

export default {
  title: "useCallback stroies"
}

export const LikeUseCallback = () => {
  console.log("LikeUseCallback")
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

  // example via useMemo
  // const memorizedAddBook = useMemo(() => {
  //   return () => {
  //     console.log(books);
  //     setBooks([...books, "Angular " + new Date().getTime()])
  //   }
  // }, [books])

  // example via useCallback
  const memorizedAddBook = useCallback(() => {
    console.log(books);
    setBooks([...books, "Angular " + new Date().getTime()])
  }, [books])

  return (
    <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button> {counter}
      <hr />
      <Books addBooks={memorizedAddBook} />
    </>
  )
}

type BooksSecretPropsType = {
  addBooks: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
  console.log("BooksSecret")
  return (
    <div>
      <button onClick={() => { props.addBooks() }}>add book</button>
    </div>
  )
}

const Books = React.memo(BooksSecret)