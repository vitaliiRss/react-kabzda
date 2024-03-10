import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input stories",
  //component: OnOff,
}

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
  const [value, setvalue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => { setvalue(event.currentTarget.value) }

  return (
    <>
      <input onChange={onChange} /> - {value}
    </>
  )
}

export const GetValueOfUncontrolledInput = () => {
  const [value, setvalue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const saveValue = () => {
    const element = inputRef.current as HTMLInputElement
    setvalue(element.value);
  }

  return (
    <>
      <input ref={inputRef} /> <button onClick={saveValue}>save</button> - {value}
    </>
  )
}

export const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("")

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  return (
    <input value={inputValue} onChange={onChangeHandler} />
  )
}

export const ControlledCheckbox = () => {
  const [checkboxValue, setCheckboxValue] = useState(true)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.currentTarget.checked)
  }

  return (
    <input type="checkbox" onChange={onChangeHandler} checked={checkboxValue} />
  )
}

export const ControlledSelect = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>("2")

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.currentTarget.value)
  }

  return (
    <select value={selectValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>Kiev</option>
      <option value={"3"}>Berlin</option>
    </select>
  )
}

export const Input = () => <input value={"test value"} />
