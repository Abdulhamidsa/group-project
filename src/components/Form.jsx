import { useRef, useState } from "react";
// :)
import FormV2 from "./FormV2";

function Form() {
  const formInputs = useRef();
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

  const [details, setDetails] = useState({
    ig: "",
    snapchat: "",
    fb: "",
    li: "",
    twitter: "",
    twitch: "",
    yt: "",
  });

  // function to calculate co2 produced

  const handleChange = (e) => {
    //const name = e.target.name;
    //const value = e.target.value;
    // to make the above looks prettier (object destructuring) , it is the same as saying :
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    console.log(details);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formInputs}>
        {SoMe.map((element) => {
          return (
            <div className="form-control" key={element.key}>
              <label htmlFor={element.name}>{element.name}</label>
              <input type="number" name={element.key} co2={element.co2} onChange={handleChange}></input>
            </div>
          );
        })}
        <button>Calculate</button>
      </form>
      <FormV2></FormV2>
    </>
  );
}

export default Form;
