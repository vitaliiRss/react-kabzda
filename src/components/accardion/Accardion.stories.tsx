import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accardion } from "./Accardion";

export default {
  title: "Accardion stories",
  component: Accardion,
}

const callback = action("Accardion clicked");

export const CollapsedAccardion = () => <Accardion onClick={callback} titleValue={"Menu"} collapsed={true} />
export const UncollapsedAccardion = () => <Accardion onClick={callback} titleValue={"Menu"} collapsed={false} />

export const DynamicAccardion = () => {
  const [value, setValue] = useState<boolean>(false);
  return <Accardion onClick={() => { setValue(!value) }} titleValue={"Menu"} collapsed={value} />
}