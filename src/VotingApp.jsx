import React, { useState } from "react";
import "./VotingApp.css"; // Import new CSS

function VotingApp() {
  const [age, setAge] = useState("");
  const [eligible, setEligible] = useState(null);
  const [votes, setVotes] = useState({ A: 0, B: 0 });

  const checkEligibility = () => {
    setEligible(age >= 18);
  };

  const vote = (candidate) => {
    setVotes((prev) => ({ ...prev, [candidate]: prev[candidate] + 1 }));
  };

  const leadingMessage =
    votes.A > votes.B
      ? "🟢 Candidate A is leading!"
      : votes.B > votes.A
      ? "🔵 Candidate B is leading!"
      : "⚖️ It’s a tie!";

  return (
    <div className="voting-container">
      <h1>University Election 2025</h1>
      <p className="subtitle">Cast your vote and see the results live!</p>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={checkEligibility}>Check Eligibility</button>
      </div>

      {eligible === false && (
        <p className="error-msg">❌ Sorry, you are not eligible to vote.</p>
      )}

      {eligible === true && (
        <div className="voting-section">
          <p className="success-msg">✅ You are eligible to vote!</p>

          <div className="candidates">
            <div className="candidate-card candidate-a">
              <h2>Candidate A</h2>
              <button onClick={() => vote("A")}>Vote 🟢</button>
              <p>{votes.A} votes</p>
            </div>

            <div className="candidate-card candidate-b">
              <h2>Candidate B</h2>
              <button onClick={() => vote("B")}>Vote 🔵</button>
              <p>{votes.B} votes</p>
            </div>
          </div>

          <div className="results">
            <h3>📊 Live Results</h3>
            <p>{leadingMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VotingApp;
