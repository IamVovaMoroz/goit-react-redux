import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionStep } from '../../store/counter/actions';

const Step = () => {
    // получаем занчение state.step из state в Store, благодаря useSelector
const step =  useSelector(state => state.counter.step)
const dispath = useDispatch()
console.log("state.counter.step!!!!",step)
  const handleSubmit = (event) => {
    event.preventDefault();
    const {value} = event.target.elements.step
    console.log(value)
    // вызываем dispath который возмет значение со state в store, и отправит ему новое значение(обьект), в котором меняет  значение в step на value из формы
    dispath(actionStep(value))

    // dispath({type: "setStep", payload: Number(value)})
  };

  // функция принимает аргумент значение с инпута и возвращает обьект готовый с новым значением payload
 

  return (
    <div>
      <p>Step устанавливает значение state в Store</p>
      <form onSubmit={handleSubmit}>
        <input type="number" name="step" placeholder='step' defaultValue={step}/>
        <button type="submit">Submit Set step</button>
      </form>
    </div>
  );
};

export default Step;