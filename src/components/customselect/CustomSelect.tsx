
import React, { useState, KeyboardEvent, useEffect } from "react"
import styles from "./CustomSelect.module.css"

type CustomSelectItemType = {
  title: string
  value: any
}

type CustomSelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: CustomSelectItemType[]
}

export function CustomSelect(props: CustomSelectPropsType) {

  const [active, setActive] = useState(false)
  const [hoveredElement, setHoveredElement] = useState(props.value)

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === hoveredElement)

  useEffect(() => {
    setHoveredElement(props.value)
  }, [props.value])

  const toggleItems = () => {
    setActive(!active)
  }

  const onClickItem = (value: any) => {
    props.onChange(value);
    toggleItems()
  }

  const onKeyUP = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElement) {
          const nextItem = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
          if (nextItem) {
            props.onChange(nextItem.value)
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false)
    }
  }

  return (
    <div className={styles.select} onKeyUp={onKeyUP} tabIndex={0}>
      <span onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
      {
        active &&
        <div className={styles.items}>
          {props.items.map(item => {
            return (
              <div
                className={styles.item + " " + (hoveredItem === item ? styles.selected : "")}
                key={item.value}
                onClick={() => { onClickItem(item.value) }}
                onMouseEnter={() => { setHoveredElement(item.value) }}
              >{item.title}</div>
            )
          })}
        </div>
      }
    </div >
  )
}