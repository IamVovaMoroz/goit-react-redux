import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
//  useSelector((state) будет принимать то, что возвращает функция getState() т.е state с Store. useSelector функция будет это делать. 
const state = useSelector((state)=>state)
console.log('stateFromStore из useSelector, заданый в store reducer как начальное значение', state)
console.log('stateFromStore благодаря useSelector получаем значение', state)

const stateTotal =  useSelector((state)=>state.total)
console.log('stateFromStore(state.total) благодаря useSelector получаем значение', stateTotal)
  return (


    
    <div> <h1>Counter</h1>
    <button onclick="decrement()">DECREMENT</button>
    <span id="totalValue">{stateTotal}</span>
    <button onclick="increment()">INCREMENT</button>
 </div>
  )
}
export default Counter