import { useRef, useState } from "react";
import Calculate from "./Calculate";

function Form() {
  const formInputs = useRef();
  const [formData, setFormData] = useState({});

  const [submitted, setSubmitted] = useState(false);
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

  // function to calculate co2 produced

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    console.log("data", formInputs.current.elements);
    event.preventDefault(); // 👈️ prevent page refresh
    const keys = Object.keys(multiply);
    const values = keys.map((entries) => {
      const obj = {};
      obj[entries] = formInputs.current.elements[entries].value * multiply[entries] * 60;
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
    setSubmitted(true);
    return values;
  };

  return (
    <>
        {submitted ? <Calculate results={formData} /> : (
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
        )}
    </>
  );
}

export default Form;
