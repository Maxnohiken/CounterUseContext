import { useContext } from "react";
import { CounterContext } from "../App";

const BtnIncrement= () => {
    const context=useContext(CounterContext);
    return (
        <button onClick={context.increment}>Incrementa</button>
    );
};

export default BtnIncrement;