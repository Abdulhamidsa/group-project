export default function Calculate(props) {
  console.log(props);
  const multiply = {
    tiktok: 2.63,
    reddit: 2.48,
    pinterest: 1.3,
    ig: 1.05,
    snapchat: 0.87,
    fb: 0.79,
    li: 0.71,
    twitter: 0.6,
    yt: 0.46,
  };

  function calc(results) {
    console.log("results", results);

    Object.keys(results).forEach(function (key, index) {
      results[key] *= 12;
    });

    console.log(results);
    return multiply.tiktok * 5;
  }

  // console.log(calc(props.results));
  return (
    <>
      {calc(props.results)}
      <p>hej</p>
    </>
  );
}
