import {logo, github} from '../assets'
import React from 'react'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src = {logo} alt="create_logo" 
            className="w-28  h-24 object-contain"/>

          <img src = {github} alt="github_logo" 
            className="w-28 h-12 object-contain" 
            onClick={()=> window.open('https://google.com')}/>
            {/* <button
            type="button"
            className="black_btn"
           >
                GitHub
            </button> */}
        </nav>

        <h1 className='head_text'>
                Simply get your script from lengthy articles  for your content video <br className="max-md:hidden"/>
             <span className='orange_gradient'>Chat GPT</span>
        </h1>
        <h2 className='desc'>
         Transforms lengthy articles into clear and concise summaries to save your time
      </h2>
    </header>
  );
};

export default Hero;

