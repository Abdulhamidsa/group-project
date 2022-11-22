export default function Calculate(props) {
  
  const multiply = {
    tiktok: 2.63,
    reddit: 2.48,
    pinterest: 1.3,
    ig: 1.05,
    snapchat: 0.87,
    fb: 0.79,
    li: 0.71,
    twitter: 0.6,
    twitch: 0.55,
    yt: 0.46,
  };

  function calc(results) {
    console.log("results", results);
    console.log("original", multiply);

    Object.keys(results).forEach(function (key, index) {
      console.log(key);
      results[key] = results[key] * 60 * multiply[key];
    });

    // console.log(results);
    sumUp(results);
  }

  // function to sum everything up
  function sumUp(numbers) {
    return Object.values(numbers).reduce((a, b) => a + b, 0);
  }

  return (
    <>
      <section className="result">
        <h2>{calc(props.results)}</h2>
        <p>It is as if you manufactured 1039 plastic bottles every day.</p>
      </section>
      {/* here will be info about how many bottles person produced */}

      {/* here will be option to see more details */}
    
      {/* <p>hej</p> */}
    </>
  );
}
