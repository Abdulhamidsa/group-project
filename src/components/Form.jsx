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
    // const values = keys.map((entries) => {
    //   const obj = {};
    //   obj[entries] = formInputs.current.elements[entries].value * multiply[entries] * 60;
    //   return { ...obj };
    // });
    let values = {};
    keys.map((entries) => {
      values[entries] = formInputs.current.elements[entries].value * multiply[entries] * 60;
    });
    console.log(values);

    // 👇️ access input values here
    // const formObj = {};
    // formObj.tiktok = formInputs.current.elements.tiktok.value * multiply.tiktok;
    // console.log("first 👉️", formInputs.current.elements.tiktok.value * multiply.tiktok);
    // console.log("last 👉️", formInputs.current.elements.reddit.value * multiply.reddit);

    setFormData(values);
    // 👇️ clear all input values in the form
    setSubmitted(true);
    return values;
  };

  return (
    <>
      {submitted ? (
        <Calculate some={SoMe} results={formData} />
      ) : (
        <>
          <form onSubmit={handleSubmit} ref={formInputs}>
            <h2 class="form_header">How many hours do you spend on these social media on an average day?</h2>
            <div className="form_grid">
              {SoMe.map((element) => {
                return (
                  <div className="form-control" key={element.key}>
                    <label class="column1" htmlFor={element.name}>
                      {element.name}
                    </label>
                    <input class="column2" type="number" name={element.key}></input>
                  </div>
                );
              })}
              <button className="calcBtn">CALCULATE</button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Form;

//   return (
//     <>
//       {submitted ? (
//         <Calculate some={SoMe} results={formData} />
//       ) : (
//         <form onSubmit={handleSubmit} ref={formInputs}>
//           {SoMe.map((element) => {
//             return (
//               <div className="form-control" key={element.key}>
//                 <label htmlFor={element.name}>{element.name}</label>
//                 <input type="number" name={element.key}></input>
//               </div>
//             );
//           })}
//           <button>Calculate</button>
//         </form>
//       )}
//     </>
//   );
// }
