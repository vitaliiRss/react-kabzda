import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledAccardion } from "./UncontrolledAccardion";

export default {
  title: "Uncontrolled Accardion stories",
  component: UncontrolledAccardion,
}

export const DynamicUncontrolledAccardion = () => {
  return <UncontrolledAccardion titleValue={"Menu"} />
}