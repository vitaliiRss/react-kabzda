import { StateType, TOGGLE_COLLAPSED, reducer } from "./reducer"

test("collapsed should true", () => {

  const state: StateType = {
    collapsed: false
  }

  const newState = reducer(state, { type: TOGGLE_COLLAPSED })

  expect(newState.collapsed).toBe(true)
})

test("collapsed should false", () => {

  const state: StateType = {
    collapsed: true
  }

  const newState = reducer(state, { type: TOGGLE_COLLAPSED })

  expect(newState.collapsed).toBe(false)
})

test("reducer show throw error due to incorect type", () => {

  const state: StateType = {
    collapsed: true
  }

  expect(() => {
    reducer(state, { type: "FAKE" })
  }).toThrowError();
})