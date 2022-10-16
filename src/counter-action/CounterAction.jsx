import "./CounterAction.css";
const CounterAction = (props) => {
  return (
    <div>
      <button onClick={props.increaseNumber} className="btn">
        increase counter
      </button>
      <button onClick={props.decreaseNumber} className="btn">
        decrease counter
      </button>
    </div>
  );
};

export default CounterAction;
