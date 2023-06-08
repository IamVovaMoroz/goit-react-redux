import { combineReducers } from "redux"
import { todoReducer } from "./todo/todoReducer"
import { counterReducer } from "./counter/counterReduser"

// создаем КОМБАЙН Reducer, для редюсеров
// передаем обьект. Это даёт возможность убрать экспорт из отдельных редюсеров
// ключи и значения(названия редюсеров)
 export const rootReducer = combineReducers({

todo: todoReducer,

counter: counterReducer
        })
  