import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledOnOff } from "./UncontrolledOnOff";

export default {
  title: "Uncontrolled OnOff stories",
  component: UncontrolledOnOff,
}

const callback = action("UncontrolledOnOff clicked");

export const DynamicUncontrolledOnOff = () => <UncontrolledOnOff defaultValue={true} onChange={callback} />
