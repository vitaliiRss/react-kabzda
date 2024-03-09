import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledRating } from "./UncontrolledRating";

export default {
  title: "Uncontrolled Rating stories",
  component: UncontrolledRating,
}

const callback = action("Rating clicked")

export const UncontrolledRating0 = () => <UncontrolledRating defaultValue={0} onClick={callback} />
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onClick={callback} />
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onClick={callback} />
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onClick={callback} />
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onClick={callback} />
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onClick={callback} />
