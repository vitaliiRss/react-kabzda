import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { OnOff } from "./OnOff";

export default {
  title: "OnOff stories",
  component: OnOff,
}

const callback = action("OnOff clicked");

export const OnMode = () => <OnOff on={true} onClick={callback} />
export const OffMode = () => <OnOff on={false} onClick={callback} />
export const DynamicMode = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff on={value} onClick={setValue} />
}