export default function Calculate(props) {
  // console.log("props", props);

  const resultsArray = props.results.map((result) => {
    return Object.values(result);
  })

  let newResultsArray = resultsArray.flatMap(res => res);

  console.log("test results", newResultsArray)

<<<<<<< HEAD
=======
  // function to sum everything up
  function sumUp(array) {
    return array.reduce((a, b) => a + b, 0);
  }

>>>>>>> 5eab99495fcf8d96e602fedc67545f9d11673062
  return (
    <>
      <section className="result">
        <h2>{sumUp(newResultsArray)} CO2</h2>
        <p>It is as if you manufactured 1039 plastic bottles every day.</p>
      </section>
      {/* here will be info about how many bottles person produced */}

      {/* here will be option to see more details */}
    
    </>
  );
}
