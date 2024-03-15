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

export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Dymych", "Valera", "Artem"])

  const addUsers = () => {
    setUsers([...users, "Sveta"])
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