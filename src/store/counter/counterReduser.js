import {initualCounterState} from "./initialCounterState"

export const counterReducer = (state = initualCounterState, action) => {
    console.log("action", action)
    if (action.type === "INCREMENT"){
        // total что хотим поменять, указываем ключ и значение + действие из payload
       
        // return {total: state.total + action.payload }
         // чтобы не потерять никакое значение, ключ и т.д. изменив то что поменялось, вначале распыляем state а потом перезаписываем что нужно

         return {...state,  total: state.total + action.payload }
    }
    if (action.type === "DECREMENT"){
        return {...state, total: state.total - action.payload }
    }

    if (action.type === "SETSTEP"){
        // step изменится на то что передали в action.payload
        return {...state, step: action.payload }
    }


 
    return state}