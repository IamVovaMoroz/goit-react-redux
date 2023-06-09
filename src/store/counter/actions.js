import { createAction } from "@reduxjs/toolkit"

export const actionStep = createAction("SETSTEP")
export const decrementAction = createAction("DECREMENT")
export const incrementAction = createAction("INCREMENT")


// import { DECREMENT, INCREMENT, SETSTEP } from "./types"

// export function actionStep(value) { return {type: "SETSTEP", payload: Number(value)}}

     
          
// export function decrementAction(stateStep) {
//     return { type: "DECREMENT",  payload: stateStep,}}

      

// Было так
      // export function incrementAction(stateStep) {
      //   return {type: "INCREMENT", payload: stateStep,}}
    
// Стало так
 //  меняем actions на сокращенный вариант
// createAction создаёт Action. Принимает только  type. В payload он записывает то, что было записано во время вызова функции позже. Т.е где быдем вызывать и передавать  incrementAction(12)  то и пойдёт
      

      // console.log('incrementAction payload определился при вызове, что передали', incrementAction(12))
      //  =>>> createAction {type: 'INCREMENT', payload: 12}


     

      // При вызова decrementAction с методом decrementAction.toString()  мы получаем type из этой функции
      // console.log('decrementAction type =>>DECREMENT? YES -', decrementAction.toString())
