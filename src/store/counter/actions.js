export function actionStep(value) {
    return {type: "SETSTEP", payload: Number(value)}
      }

export function incrementAction(stateStep) {
        return {
            type: "INCREMENT",
            payload: stateStep,
          }
          }

          
export function decrementAction(stateStep) {
    return {
        type: "DECREMENT",
        payload: stateStep,
      }
      }