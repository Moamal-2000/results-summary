import "./ResultsCard.css";
import Summary from "./Summary";
import YourResult from "./YourResult";

const ResultsCard = () => {
  return <div className="results-card">
    <YourResult />
    <Summary />
  </div>;
};

export default ResultsCard;
