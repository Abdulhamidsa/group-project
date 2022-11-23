import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {start ? <Form /> : (
        <>
          <h1>CHECK YOUR IMPACT. MAKE A CHANGE.</h1>
          <p>Have you ever though how much CO2 you produce when using social media? Every online activity requires energy and resources. Check your carbon footprint now and learn how you can make a change!</p>
          <button onClick={() => setStart(true)} aria-label="Show the form">Start</button>
        </>
      )}
    </>
  );
}

export default App;
