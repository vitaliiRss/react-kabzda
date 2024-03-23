import React, { useMemo, useState } from "react"

export default {
  title: "useMemo stroies"
}

export const DifficultCounting = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 10000000) {
        fake++
        let fakeValue = Math.random()
      }
      resultA = resultA * i;
    }
    return resultA
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => { setA(Number(e.currentTarget.value)) }} />
      <input value={b} onChange={(e) => { setB(Number(e.currentTarget.value)) }} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS SECRET")
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

export const helpToReactMemo = () => {
  console.log("HELP TO REACT MEMO")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Dymych", "Valera", "Artem", "Katya"])

  const newArray = useMemo(() => {
    return users.filter(user => user.toLowerCase().indexOf("a") > -1)
  }, [])

  const addUsers = () => {
    setUsers([...users, "Sveta " + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      {counter}
      <hr />
      <button onClick={addUsers}>add user</button>
      <Users users={newArray} />
    </>
  )
}