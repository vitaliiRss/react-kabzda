import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";

export default {
  title: "Accardion stories",
  component: Accordion,
}

const callback = action("Accardion clicked");
const clickOnLiElementCallback = action("Accardion clicked");

export const CollapsedAccardion = () => {
  return (
    <Accordion
      onClick={callback}
      clickOnLiElement={clickOnLiElementCallback}
      titleValue={"Menu"}
      collapsed={true}
      items={
        [
          { value: 1, title: "user 1" },
          { value: 2, title: "user 2" },
          { value: 3, title: "user 3" },
          { value: 4, title: "user 4" }
        ]
      } />
  )
}
export const UncollapsedAccardion = () => {
  return (
    <Accordion
      onClick={callback}
      clickOnLiElement={clickOnLiElementCallback}
      titleValue={"Menu"}
      collapsed={false}
      items={
        [
          { value: 1, title: "user 1" },
          { value: 2, title: "user 2" },
          { value: 3, title: "user 3" },
          { value: 4, title: "user 4" }
        ]
      } />
  )
}

export const DynamicAccardion = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <Accordion onClick={() => { setValue(!value) }}
      clickOnLiElement={clickOnLiElementCallback}
      titleValue={"Menu"}
      collapsed={value}
      items={
        [
          { value: 1, title: "user 1" },
          { value: 2, title: "user 2" },
          { value: 3, title: "user 3" },
          { value: 4, title: "user 4" }
        ]
      } />
  )
}