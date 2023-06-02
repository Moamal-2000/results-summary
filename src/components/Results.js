import apiData from "../data/data.json";
import "./Results.css";

const Results = () => {
  const results = apiData.map((item) => (
    <div key={item.id} className="res">
      <div className="left-side">
        <img src={require(`${item.icon}`)} alt={`icon img ${item.id}`} />
        <h4>{item.category}</h4>
      </div>
      <div className="right-side">
        <h4 className="score-container">
          <span className="score">{item.score}</span> / 100
        </h4>
      </div>
    </div>
  ));

  return <div className="results-container">{results}</div>;
};

export default Results;
