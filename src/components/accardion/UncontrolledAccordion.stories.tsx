import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "Uncontrolled Accordion stories",
  component: UncontrolledAccordion,
}

export const DynamicUncontrolledAccordion = () => {
  return <UncontrolledAccordion titleValue={"Menu"} />
}