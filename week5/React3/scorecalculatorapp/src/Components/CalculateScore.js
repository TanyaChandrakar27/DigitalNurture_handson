import React from "react";

function CalculateScore(props) {
  const average = props.total / props.goal;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "400px",
        margin: "30px auto",
        textAlign: "left",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2>Student Score Calculator</h2>

      <p><strong>Name:</strong> {props.name}</p>

      <p><strong>School:</strong> {props.school}</p>

      <p><strong>Total Marks:</strong> {props.total}</p>

      <p><strong>Number of Subjects:</strong> {props.goal}</p>

      <h3>Average Score: {average}</h3>
    </div>
  );
}

export default CalculateScore;