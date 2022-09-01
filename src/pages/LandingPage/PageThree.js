import { useContext } from "react";
import { Wrapper } from "../../components/SC-library";
import { CounterContext } from "../../contexts/CounterContext";

const Page3 = () => {
  const { count } = useContext(CounterContext);

  return (
    <main>
      <h1>Count 3:</h1>
      <Wrapper>
        <h2>{count}</h2>
      </Wrapper>
    </main>
  );
};

export default Page3;
