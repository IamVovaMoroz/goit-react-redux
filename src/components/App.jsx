import Step from "components/Counter/step";
import Counter from "./Counter/Counter";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Step/>
      <Counter/>
     
    </div>
  );
};
