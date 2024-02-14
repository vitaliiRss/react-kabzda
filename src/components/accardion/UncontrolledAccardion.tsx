import React, { useState } from 'react';

type UncontrolledAccardionPropsType = {
  titleValue: string,
}

export function UncontrolledAccardion({ titleValue }: UncontrolledAccardionPropsType) {

  let [collapsed, setCollapsed] = useState(true)

  return (
    <div>
      <AccardionTitle title={titleValue} />
      <button onClick={() => { setCollapsed(!collapsed) }}>toggle</button>
      {!collapsed && <AccardionBody />}
    </div>
  )
}

type AccardionTitlePropsType = {
  title: string
}

function AccardionTitle({ title }: AccardionTitlePropsType) {
  return (
    <h3>{title}</h3>
  );
}

function AccardionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
