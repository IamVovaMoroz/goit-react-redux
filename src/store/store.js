// создаём store
import { createStore } from  'redux'
import { rootReducer } from './reducer'

// 1) cоздали reducer который будет менять state
// функция reducer .Принимаем state и возвращает его пока что
export const reducer = (state, action) => {
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

    if (action.type === "setStep"){
        // step изменится на то что передали в action.payload
        return {...state, step: action.payload }
    }

 
    return state}
// создаем и импортируем его в App. initualState - 0, дефолтное значение state = 0. reducer - функция принимающая только обьекты
// store инициализация работы магазина. Задаём State начальный
// reducer  функция которую нужно будет прописать, которая будет принимать action и менять state в нужных

//2) создали store в который передаём начальное значение reducer. Запустили reducer
// export const store = createStore(reducer, {total:0} )

// console.log("reducer", reducer)
// 3) добавляем store в index.js для запуска. import "./store/store"
// console.log("store.getState", store.getState()) // undefined , пока нет state.  Или значение будет, если передали тут: const store = createStore(reducer, 0 )  

// 4) создаем action. для отправки в store(reducer) используем store.dispatch
// store.dispatch({type:"INCREMENT", payload: 1})

// console.log("store.getState после reducer", store.getState()) // undefined , пока нет state.  Или значение будет, если передали тут: const store = createStore(reducer, 0 )

// export const store = createStore(rootReducer, {total:0, step: 1} )

export const store = createStore(rootReducer )


console.log("store.getState после reducer", store.getState()) 