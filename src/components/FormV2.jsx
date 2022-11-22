import { useRef, useState } from "react";
// :)

export default function FormV2() {
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
    tiktok: "",
    reddit: "",
    pinterest: "",
    ig: "",
    snapchat: "",
    fb: "",
    li: "",
    twitter: "",
    twitch: "",
    yt: "",
  });

  // function to calculate co2 produced

  function calculateFootprint(event) {
    event.preventDefault();
    console.log(formInputs.number);
  }
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form onSubmit={calculateFootprint} ref={formInputs}>
        <div className="form-control">
          <h3>tik</h3>
          <input type="number" name="Tik Tok" onChange={handleChange}></input>
          <h3>redit</h3>
          <input type="number" name="Reddit" onChange={handleChange}></input>
          <h3>pint</h3>
          <input type="number" name="Pinterest" onChange={handleChange}></input>
          <h3>insta</h3>
          <input type="number" name="Instagram" onChange={handleChange}></input>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}
