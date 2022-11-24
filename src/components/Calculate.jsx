import { useRef } from "react";
// import { Link } from "react-scroll";

export default function Calculate(props) {
  const scollToRef = useRef();

  const handleClick = (ev) => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // console.log("props", props);

  const resultsObject = Object.values(props.results);

  // console.log("test results", resultsObject);

  // function to sum everything up
  function sumUp(array) {
    return Math.round(array.reduce((a, b) => a + b, 0));
  }

  // calculating how many bottles the user produced
  function calculateBottles() {
    const result = sumUp(resultsObject);
    // console.log(result);
    return Math.round(result / 82.8);
  }

  return (
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
                <p> {element.name}</p>
                <p className="result-nr"> {props.results[element.key]}g CO2</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
