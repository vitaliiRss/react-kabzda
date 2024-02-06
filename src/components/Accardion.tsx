import React from 'react';

type AccardionPropsType = {
  titleValue: string,
  collapsed: boolean
}

export function Accardion(props: AccardionPropsType) {
  if(props.collapsed === true) {
    return (
      <div>
        <AccardionTitle title={props.titleValue}/>
        <AccardionBody />
      </div>
    );
  } else {
    return (
      <div>
        <AccardionTitle title={props.titleValue}/>
      </div>
    );
  }
}

type AccardionTitlePropsType = {
  title: string
}

function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
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
