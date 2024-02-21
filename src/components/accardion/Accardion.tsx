import React from 'react';

type AccardionPropsType = {
  titleValue: string,
  collapsed: boolean
  onClick: () => void
}

export function Accardion(props: AccardionPropsType) {
  return (
    <div>
      <AccardionTitle title={props.titleValue} onClick={props.onClick} />
      {!props.collapsed && <AccardionBody />}
    </div>
  )
}

type AccardionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <h3 onClick={props.onClick}>{props.title}</h3>
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
