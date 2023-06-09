
import { createReducer } from "@reduxjs/toolkit"
import {initialCounterState} from "./initialCounterState"
// import {  INCREMENT, SETSTEP } from "./types"
import { actionStep, decrementAction, incrementAction } from "./actions"
// export const counterReducer = (state = initialCounterState, action) => {
//     console.log("action", action)
  
//         // total что хотим поменять, указываем ключ и значение + действие из payload
       
//         // return {total: state.total + action.payload }
//          // чтобы не потерять никакое значение, ключ и т.д. изменив то что поменялось, вначале распыляем state а потом перезаписываем что нужно

//          if (action.type === "INCREMENT"){
//          return {...state,  total: state.total + action.payload }
//     }
//     if (action.type === "DECREMENT"){
//         return {...state, total: state.total - action.payload }
//     }

//     if (action.type === "SETSTEP"){
//         // step изменится на то что передали в action.payload
//         return {...state, step: action.payload }
//     }


 
//     return state}



// createReducer принимает initial State(УЖЕ НЕ НУЖНО ПИСАТЬ: state = initialCounterState)
   


//1) название ключей оборачиваем в квадратные скобки
// 2) callBack
export const counterReducer = createReducer(initialCounterState, {
    // [INCREMENT] : (state, action) => {return {...state,  total: state.total + action.payload }},
    [incrementAction] : (state, action) => {return {...state,  total: state.total + Number(action.payload) }},

   
  
    // можно не делать импорт , а писать сразу функции назавание с decrementAction.toString()  или без него вместо [DECREMENT]

// 1 вариант с деструктуризацией и без с импортом ключей DECREMENT

 // [DECREMENT] : (state, action) => {return {...state,  total: state.total - action.payload }}
    // [DECREMENT]: (state, { payload }) => ({ ...state, total: state.total - payload }),


    //2 вариант используем название функции
    //  [decrementAction]: (state, { payload }) => ({ ...state, total: state.total - payload }),

  // 3 вариант используем название функции с методом .toString()  
    [decrementAction.toString()]: (state, { payload }) => ({ ...state, total: state.total - payload }),


    [actionStep]: (state, action) => ({ ...state, step: Number(action.payload)  }),


    })
// export const counterReducer = createReducer(initialCounterState, {
//     [incrementAction]: (state, action) => {
//       const { total, step } = state;
//       return { ...state, total: total + Number(step) };
//     },
  
//     [decrementAction]: (state, action) => {
//       const { total, step } = state;
//       return { ...state, total: total - Number(step) };
//     },
  
//     [actionStep]: (state, action) => {
//       const newStep = Number(action.payload); // Convert payload to number
//       return { ...state, step: newStep };
//     },
//   });