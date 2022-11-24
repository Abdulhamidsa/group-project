export default function Calculate(props) {
  console.log("props", props);

  const resultsObject = Object.values(props.results);

  console.log("test results", resultsObject);

  // function to sum everything up
  function sumUp(array) {
    return Math.round(array.reduce((a, b) => a + b, 0));
  }

  // calculating how many bottles the user produced
  function calculateBottles() {
    const result = sumUp(resultsObject);
    console.log(result);
    return Math.round(result / 82.8);
  }

  return (
    <>
      <section className="result">
        <h2>{sumUp(resultsObject)}g of CO2</h2>
        <p>The same as if you manufactured {calculateBottles()} plastic bottles every day.</p>
        <p>In one year, you would produce {calculateBottles() * 365} plastic bottles.</p>
      </section>
      <section className="detailed-result">
        <h2>Detailed results</h2>
        <p>Check which social media have the highest carbon footprint.</p>
        {props.some.map((element) => {
          console.log(props.results[element.key]);
          return (
            <div className="some-result">
              <p>
                {element.name}: You produce {props.results[element.key]}g CO2 on average day.
              </p>
            </div>
          );
        })}
      </section>
      {/* here will be option to see more details */}
    </>
  );
}
