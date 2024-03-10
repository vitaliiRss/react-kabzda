import React from 'react';

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  items: ItemType[]
  onClick: () => void
  clickOnLiElement: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={props.onClick} />
      {
        !props.collapsed
        &&
        <AccordionBody clickOnLiElement={props.clickOnLiElement}
          items={props.items}
        />
      }
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={(e) => { props.onClick() }}>{props.title}</h3>
  );
}

type AccordionBodyPropsType = {
  items: ItemType[]
  clickOnLiElement: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  const accordionItems = props.items.map((item, index) => {
    return (
      <li key={index} onClick={() => { props.clickOnLiElement(item.value) }} >{item.title}</li>
    )
  })

  return (
    <ul>
      {accordionItems}
    </ul>
  );
}
