import {useRef} from 'react';

function Form() {
    const formInputs = useRef();
    // array with SoMe
    const SoMe = [{name: "Tik Tok", key: "tiktok", co2: 2.63}, {name: "Reddit", key: "reddit" , co2: 2.48},{name: "Pinterest", key: "pinterest", co2: 1.30}, {name: "Instagram", key: "ig", co2: 1.05}, {name: "Snapchat", key: "snapchat", co2: 0.87}, {name: "Facebook", key: "fb", co2: 0.79}, {name: "LinkedIn", key: "li", co2: 0.71}, {name: "Twitter", key: "twitter", co2: 0.60}, {name: "Twitch", key: "twitch", co2: 0.55}, {name: "Youtube", key: "yt", co2: 0.46}]

    // function to calculate co2 produced

    function calculateFootprint(event) {
        event.preventDefault();
        console.log(formInputs);
    }

  return (
    <>
        <form onSubmit={calculateFootprint} ref={formInputs}>
            {SoMe.map((element) => {
                return(
                    <div className='form-control' key={element.key}>
                        <label htmlFor={element.name}>{element.name}</label>
                        <input type='number' name={element.key} co2={element.co2}></input>
                    </div>
                )
            })}
            <button>Calculate</button>
        </form>
    </>
  )
}

export default Form