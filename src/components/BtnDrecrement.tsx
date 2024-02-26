import { useContext } from "react";
import { CounterContext } from "../App";

const BtnDecrement = () => {
    const context= useContext(CounterContext);
    return (
        <button onClick={context.decrement}>Decrementa</button>
    );
};

export default BtnDecrement;