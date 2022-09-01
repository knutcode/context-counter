import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
import { Wrapper } from "../../components/SC-library";

const Page1 = () => {
  const { count, setCount } = useContext(CounterContext);

  const subtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <h1>Set count</h1>
      <Wrapper>
        <button onClick={subtract}>-</button>
        <h2>{count}</h2>
        <button onClick={add}>+</button>
      </Wrapper>
    </main>
  );
};

export default Page1;
