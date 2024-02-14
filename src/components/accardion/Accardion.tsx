import React from 'react';

type AccardionPropsType = {
  titleValue: string,
  collapsed: boolean
}

export function Accardion({ titleValue, collapsed }: AccardionPropsType) {
  return (
    <div>
      <AccardionTitle title={titleValue} />
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
    < ul >
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul >
  );
}
