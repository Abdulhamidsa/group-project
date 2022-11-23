export default function Calculate(props) {
  console.log("props", props);

  // function to sum everything up
  function sumUp(numbers) {
    return Object.values(numbers).reduce((a, b) => a + b, 0);
  }

  return (
    <>
      <section className="result">
        <h2>{calc(props.results)} CO2</h2>
        <p>It is as if you manufactured 1039 plastic bottles every day.</p>
      </section>
      {/* here will be info about how many bottles person produced */}

      {/* here will be option to see more details */}
    
      {/* <p>hej</p> */}
    </>
  );
}
