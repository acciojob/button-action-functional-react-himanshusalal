import React, { useState } from "react";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div>
      <button id="click" onClick={() => setShowParagraph(true)}>
        Show Paragraph
      </button>

      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
}

export default App;