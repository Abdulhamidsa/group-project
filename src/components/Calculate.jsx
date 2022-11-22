export default function Calculate(props) {
  console.log("props", props);
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

  function calc(tiktok) {
    console.log(tiktok);
    console.log("test tiktok", tiktok * multiply.tiktok);
    /* 
    Object.keys(results).forEach(function (key, index) {
      console.log(key, multiply[key]);
      results[key] = results[key] * multiply[key];
    }); */
  }

  // console.log(calc(props.results));
  return (
    <>
      {calc(props.tiktok)}
      <p>hej</p>
    </>
  );
}
