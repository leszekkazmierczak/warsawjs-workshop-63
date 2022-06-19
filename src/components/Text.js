import { useState } from "react";

const Text = ({ text = "Counter" }) => {

    const [counter, setCounter] = useState(0);

    const onIncrement = () => {
        setCounter(counter + 1);
    }

    const onDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <p>{text}</p>
            <h2>{counter}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

export default Text;