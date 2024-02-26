import { createContext, useState } from "react";
import Counter from "./components/Counter";
import BtnDecrement from "./components/BtnDrecrement";
import BtnIncrement from "./components/BtnIncrement";


export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

function App() {
  let [counter, setCounter] = useState(0);

  function onIncrement() {
    setCounter(counter + 1);
  }

  function onDecrement() {
    setCounter(counter - 1);
  }
  


  return (
    <CounterContext.Provider
      value={{
        count:counter,
        increment: onIncrement,
        decrement: onDecrement,
      }}
    >
      <BtnDecrement />
      <Counter />
      <BtnIncrement />
    </CounterContext.Provider>
  );
}

export default App;