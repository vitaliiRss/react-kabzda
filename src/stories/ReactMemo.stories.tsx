import React, { useState } from "react"

export default {
  title: "Memo stroies"
}

const NewMessagesCounter = (props: { count: number }) => {
  return (
    <div>{props.count}</div>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS")
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <div key={index}>{user}</div>
        )
      })}
    </div>
  )
}

const Users = React.memo(UsersSecret)

export const ReactMemo = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Dymych", "Valera", "Artem", "Katya"])

  const addUsers = () => {
    setUsers([...users, "Sveta " + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      <button onClick={addUsers}>add user</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </>
  )
}