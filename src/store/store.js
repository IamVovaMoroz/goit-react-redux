// создаём store
import { createStore } from  'redux'

// 1) cоздали reducer который будет менять state
// функция reducer .Принимаем state и возвращает его пока что
const reducer = (state, action) => {
    console.log("action", action)
    if (action.type === "INCREMENT"){
        return state + action.payload 
    }
    if (action.type === "DECREMENT"){
        return state - action.payload 
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

export const store = createStore(reducer, {total:100} )