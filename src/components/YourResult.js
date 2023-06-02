import "./YourResult.css"

const YourResult = () => {
  return (
    <div className="your-result-cont">
      <h3>Your Result</h3>
      <div className="result">
        <span>76</span> of 100
      </div>
      <span className="word">Great</span>
      <p className="text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default YourResult;
