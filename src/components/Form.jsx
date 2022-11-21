import React from 'react'

function Form() {
    const SoMe = [{name: "Tik Tok", co2: 2.63}, {name: "Reddit", co2: 2.48},{name: "Pinterest", co2: 1.30}, {name: "Instagram", co2: 1.05}, {name: "Snapchat", co2: 0.87}, {name: "Facebook", co2: 0.79}, {name: "LinkedIn", co2: 0.71}, {name: "Twitter", co2: 0.60}, {name: "Twitch", co2: 0.55}, {name: "Youtube", co2: 0.46}]
  return (
    <>
        <form>
            {SoMe.map((element) => {
                return(
                    <div className='form-control'>
                        <label for={element.name}>{element.name}</label>
                        <input type='number'></input>
                    </div>
                )
            })}
            
        </form>
    </>
  )
}

export default Form