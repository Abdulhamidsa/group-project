import { useRef, useState } from "react";
import Form from "./Form";
export default function Calculate(props) {
  const [start, setStart] = useState(false);
  const scollToRef = useRef();
  const handleClick = (ev) => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const resultsObject = Object.values(props.results);
  function sumUp(array) {
    return Math.round(array.reduce((a, b) => a + b, 0));
  }
  // calculating how many bottles the user produced
  function calculateBottles() {
    const result = sumUp(resultsObject);
    return Math.round(result / 82.8);
  }
  return (
    <>
      {start ? (
        <Form />
      ) : (
        <>
          <section className="result">
            <p>YOUR TOTAL IS : </p>
            <h2>
              {sumUp(resultsObject)}g of CO2 <span className="span-underline"> PER DAY !</span>
            </h2>
            <p>
              It is as if you manufactured <span className="span-clr"> {calculateBottles()}</span> plastic bottles every day.
            </p>
            <p>
              In one year, you would produce <span className="span-clr"> {calculateBottles() * 365}</span> plastic bottles.
            </p>
            <button onClick={() => handleClick()}>DETALED RESULTS</button>
          </section>
          <section ref={scollToRef} className="detailed-result">
            <div>
              <h2>Detailed results</h2>
              <p>Check which social media have the highest carbon footprint.</p>
            </div>
            <div className="details-cont">
              {props.some.map((element) => {
                return (
                  <div className="some-result">
                    <p className="result-nr"> {element.name}</p>
                    <p>{Math.trunc(props.results[element.key])}g co2.</p>
                  </div>
                );
              })}
            </div>
            <button onClick={() => setStart(true)} aria-label="Show the form">
              CALCULATE AGAIN
            </button>
          </section>
        </>
      )}
    </>
  );
}
