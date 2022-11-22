import { useRef, useState } from "react";
import Calculate from "./Calculate";

function Form() {
  const formInputs = useRef();
  const [minutes, setMinutes] = useState([]);
  const [showForm, setShowForm] = useState(false);
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

  const handleSubmit = (event) => {
    let values = [];
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh
    // 👇️ access input values here
    console.log("first 👉️", tiktokRef.current.value);
    console.log("last 👉️", redditRef.current.value);

    // 👇️ clear all input values in the form

    return values;
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formInputs}>
        <div className="form-control">
          <input ref={tiktokRef} htmlFor="tiktok" />
          <input ref={redditRef} htmlFor="reddit" />
        </div>
        <button>Calculate</button>
      </form>
      {/*       
      {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
      {showForm && <CheckoutForm cart={props.cart}></CheckoutForm>} */}
      <Calculate tiktok={tiktokRef} />
    </>
  );
}

export default Form;
