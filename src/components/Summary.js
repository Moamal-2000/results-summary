import Results from "./Results";
import "./Summary.css"

const Summary = () => {
  return <div className="summary">
    <h3>Summary</h3>
    <Results />
    <button type="button">Continue</button>
  </div>;
};

export default Summary;
