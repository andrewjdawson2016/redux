import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import Counter from './components/Counter'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
})
const rootEl = document.getElementById('root')

const render = () => {
  console.log('calling render')
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch(increment())}
      onDecrement={() => store.dispatch(decrement())}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
