// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const Counter = () => {
// //  useSelector((state) будет принимать то, что возвращает функция getState() т.е state с Store. useSelector функция будет это делать. 
// const state = useSelector((state)=>state)
// console.log('stateFromStore из useSelector, заданый в store reducer как начальное значение', state)
// console.log('stateFromStore благодаря useSelector получаем значение', state)
// // useSelector  реагирует на любые изменения в state store, если его компонента касается приносит данные 
// const stateTotal =  useSelector((state)=>state.total)
// console.log('stateFromStore(state.total) благодаря useSelector получаем значение', stateTotal)
// // useDispatch() возвращает store.dispatch
// const dispatch = useDispatch()
// // методы для отслеживания кликов на кнопки
// const handleClickIncrement = () =>{

//     dispatch({
//         type: "INCREMENT", payload: 2
//     })
// }



// const handleClickDecrement = () =>{
//     dispatch({
//         type: "decrement", payload: 2
//     })

// }

//   return (


    
//     <div> <h1>Counter</h1>
//     <button onclick={handleClickDecrement}>DECREMENT</button>
//     <span id="totalValue">{stateTotal}</span>
//     <button onclick={handleClickIncrement}>INCREMENT</button>
//  </div>
//   )
// }
// export default Counter

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from 'store/counter/actions';

const Counter = () => {
  const state = useSelector((state) => state.counter);
  console.log('state (FromStore) из useSelector, заданый в store reducer как начальное значение', state);
  console.log('stateFromStore благодаря useSelector получаем значение', state);
  const stateTotal = useSelector((state) => state.counter.total);
  console.log('(state.total) благодаря useSelector получаем значение!!!!!', stateTotal);

  const stateStep = useSelector((state) => state.counter.step);
  console.log('(state.step) благодаря useSelector получаем значение  state.step =>>>>', stateStep);
  const dispatch = useDispatch();
// при клике, когда срабатывает handleClickIncrement, нужно увеличить не на 1 , а на то что находится в step.тоесть получить значение. Он находится в stateStep
//   const handleClickIncrement = () => {
//     dispatch({
//       type: "INCREMENT",
//       payload: 1,
//     });
//   };

//   const handleClickDecrement = () => {
//     dispatch({
//       type: "DECREMENT",
//       payload: 1,
//     });
//   };

// новые с передачей stateStep в шаг, которые задали
const handleClickIncrement = () => {
    dispatch(incrementAction(stateStep));
  };

  const handleClickDecrement = () => {
    dispatch(decrementAction(stateStep));
  };






  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleClickDecrement}>DECREMENT -</button>
      <span id="totalValue">{stateTotal}</span>
      <button onClick={handleClickIncrement}>INCREMENT +</button>
    </div>
  );
};

export default Counter;