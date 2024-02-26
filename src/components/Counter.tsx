import { useContext } from "react";
import { CounterContext } from "../App";

const Counter: React.FC = () => {
    const context = useContext(CounterContext);
    return (
        <span>{context.count}</span>
    );
};

export default Counter;