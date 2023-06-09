
import { createReducer } from "@reduxjs/toolkit"
import { initialTodoState } from "./initialTodoState"


// export const todoReducer = (state = initialTodoState, action) => {
//     if (action.type === "updateToDo"){
//         // step изменится на то что передали в action.payload
//         return {...state }
//     }
//     if (action.type === "deleteToDo"){
//         // step изменится на то что передали в action.payload
//         return {...state }
//     }

 
//     return state}

    export const todoReducer = createReducer(initialTodoState, {


    })