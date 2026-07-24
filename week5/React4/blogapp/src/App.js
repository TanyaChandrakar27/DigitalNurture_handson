import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails
        title="React Fundamentals"
        startedOn="10 Jul 2026"
        status="ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        title="Java Full Stack"
        startedOn="15 Jun 2026"
        status="completed"
        coach="Alex"
        trainer="Smith"
      />
    </div>
  );
}

export default App;