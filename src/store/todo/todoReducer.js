import { initualTodoState } from "./initialTodoState"


export const todoReducer = (state = initualTodoState, action) => {
    if (action.type === "updateToDo"){
        // step изменится на то что передали в action.payload
        return {...state }
    }
    if (action.type === "deleteToDo"){
        // step изменится на то что передали в action.payload
        return {...state }
    }

 
    return state}