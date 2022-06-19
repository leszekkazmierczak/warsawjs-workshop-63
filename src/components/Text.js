import { useState } from "react";
import "../Custom.css";

const Text = ({ text = "Counter", defaultParameter = 0 }) => {
  const [counter, setCounter] = useState(defaultParameter);

  const onChange = (increment) => {
    setCounter(counter + increment);
  };

  return (
    <div>
      <p>{text}</p>
      <h2>{counter}</h2>
      <button onClick={() => onChange(1)}>+</button>
      <button onClick={() => onChange(-1)}>-</button>
      <button onClick={() => onChange(5)}> +5</button>
    </div>
  );
};

export default Text;
