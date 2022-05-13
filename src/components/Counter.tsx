import { useState } from "react"


export const Counter = () => {

  const [counter, setCounter] = useState(0)

  const added = (number: number = 1): void => {
    setCounter(counter + number)
  }
  return (<div className="mt-5">
    <h2>Counter : useStae</h2>

    <h3>Valor: {counter}</h3>

    <button onClick={() => added()} className="btn btn-outline-primary m-2">+1</button>
    <button onClick={() => added(2)} className="btn btn-outline-primary m-2">+2</button>
    <button onClick={() => setCounter(0)} className="btn btn-outline-danger m-2">Reset</button>
  </div>)
}