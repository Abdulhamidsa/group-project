import { useRef, useState } from "react";
import Calculate from "./Calculate";

function Form() {
  const formInputs = useRef();
  const [formData, setFormData] = useState({});

  const [submitted, setSubmitted] = useState(false);
  // array with SoMe
  const SoMe = [
    { name: "Tik Tok", key: "tiktok" },
    { name: "Reddit", key: "reddit" },
    { name: "Pinterest", key: "pinterest" },
    { name: "Instagram", key: "ig" },
    { name: "Snapchat", key: "snapchat" },
    { name: "Facebook", key: "fb" },
    { name: "LinkedIn", key: "li" },
    { name: "Twitter", key: "twitter" },
    { name: "Twitch", key: "twitch" },
    { name: "Youtube", key: "yt" },
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

  //Some nice code
  // const values = keys.map((entries) => {
  //   const obj = {};
  //   obj[entries] = formInputs.current.elements[entries].value * multiply[entries] * 60;
  //   return { ...obj };
  // });

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    console.log("data", formInputs.current.elements);
    event.preventDefault(); // 👈️ prevent page refresh
    const keys = Object.keys(multiply);
    let values = {};
    keys.map((entries) => {
      values[entries] = formInputs.current.elements[entries].value * multiply[entries] * 60;
    });
    console.log(values);
    setFormData(values);
    setSubmitted(true);
    return values;
  };

  return (
    <>
      {submitted ? (
        <Calculate some={SoMe} results={formData} />
      ) : (
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
