import { useRef, useState } from "react";
import Calculate from "./Calculate";

function Form() {
  const formInputs = useRef();
  const [minutes, setMinutes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const tiktokRef = useRef();
  const redditRef = useRef();

  // array with SoMe
  const SoMe = [
    { name: "Tik Tok", key: "tiktok", co2: 2.63 },
    { name: "Reddit", key: "reddit", co2: 2.48 },
    { name: "Pinterest", key: "pinterest", co2: 1.3 },
    { name: "Instagram", key: "ig", co2: 1.05 },
    { name: "Snapchat", key: "snapchat", co2: 0.87 },
    { name: "Facebook", key: "fb", co2: 0.79 },
    { name: "LinkedIn", key: "li", co2: 0.71 },
    { name: "Twitter", key: "twitter", co2: 0.6 },
    { name: "Twitch", key: "twitch", co2: 0.55 },
    { name: "Youtube", key: "yt", co2: 0.46 },
  ];

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

    Object.keys(results).forEach(function (key, index) {
      console.log(key, multiply[key]);
      results[key] = results[key] * multiply[key];
    });
  }

  const [details, setDetails] = useState({});

  // function to calculate co2 produced

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    console.log("data", formInputs.current.elements);
    event.preventDefault(); // 👈️ prevent page refresh
    const keys = Object.keys(multiply);
    const values = keys.map((entries) => {
      const obj = {};
      obj[entries] = formInputs.current.elements[entries].value;
      return { ...obj };
    });
    console.log(values);
    // 👇️ access input values here
    const formObj = {};
    formObj.tiktok = formInputs.current.elements.tiktok.value * multiply.tiktok;
    console.log("first 👉️", formInputs.current.elements.tiktok.value * multiply.tiktok);
    console.log("last 👉️", formInputs.current.elements.reddit.value * multiply.reddit);

    setFormData(values);
    // 👇️ clear all input values in the form

    return values;
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formInputs}>
        {SoMe.map((element) => {
          return (
            <div className="form-control" key={element.key}>
              <label htmlFor={element.name}>{element.name}</label>
              <input type="number" name={element.key}></input>
            </div>
          );
        })}
        <button>Calculate</button>
      </form>

      {/*       <form onSubmit={handleSubmit} ref={formInputs}>
        <div className="form-control">
          <input htmlFor="tiktok" name="tiktok" />
          <input htmlFor="reddit" name="reddit" /> */}
      {/*           <input ref={tiktokRef} htmlFor="pinterest" />
          <input ref={redditRef} htmlFor="instagram" />
          <input ref={tiktokRef} htmlFor="snapchat" />
          <input ref={redditRef} htmlFor="facebook" />
          <input ref={tiktokRef} htmlFor="linkedin" />
          <input ref={redditRef} htmlFor="twitter" />
          <input ref={redditRef} htmlFor="youtube" /> */}
      {/*         </div>
        <button>Calculate</button>
      </form> */}
      <p></p>

      {/*       
      {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
      {showForm && <CheckoutForm cart={props.cart}></CheckoutForm>} */}
      <Calculate data={formData} />
    </>
  );
}

export default Form;
