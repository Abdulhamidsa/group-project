import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [start, setStart] = useState(false);
  return (
    <>
      {start ? (
        <Form />
      ) : (
        <>
          <div className="landing">
            <h1>
              CHECK YOUR IMPACT.<br></br> MAKE A <span className="span-underline"> CHANGE</span> .
            </h1>
            <p>Have you ever though how much CO2 you produce when using social media? Every online activity requires energy and resources. Check your carbon footprint now and learn how you can make a change!</p>
            <button onClick={() => setStart(true)} aria-label="Show the form">
              START
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
