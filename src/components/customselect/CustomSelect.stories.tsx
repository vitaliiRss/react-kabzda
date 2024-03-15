import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { CustomSelect } from "./CustomSelect";
import { title } from "process";

export default {
  title: "Custom select stories",
  component: CustomSelect,
}

export const Select = () => {
  const [value, setValue] = useState("2")

  return (
    <CustomSelect
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Kiev" },
        { value: "3", title: "Berlin" }]} />
  )
}

export const SelectwithoutValue = () => {
  const [value, setValue] = useState("null")

  return (
    <CustomSelect
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Kiev" },
        { value: "3", title: "Berlin" }]} />
  )
}