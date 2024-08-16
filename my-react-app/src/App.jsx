import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './App.css';
import { mainLogo } from './utils/utils';

function App() {
  const suggestions = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  const [inputValue, setInputValue] = useState('');
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [displayedText, setDisplayedText] = useState(suggestions[0]);
  const textRef = useRef(null);

  useEffect(() => {
    if (inputValue === '') {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Animate from bottom to middle, pause, then animate to top
      tl.fromTo(textRef.current,
        { y: '100%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 0.7, ease: 'power1.inOut' }
      )
      .to(textRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'none'
      }, '+=0.5') // Pause in the middle for 0.5 seconds
      .to(textRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut'
      })
      .call(() => {
        // Update suggestion after animation completes
        setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
        setDisplayedText(suggestions[currentSuggestion]);
      });

      return () => tl.kill(); // Cleanup GSAP timeline on component unmount
    }
  }, [inputValue, currentSuggestion]);

  useEffect(() => {
    if (inputValue === '') {
      setDisplayedText(suggestions[currentSuggestion]);
    }
  }, [currentSuggestion, inputValue]);

  return (


  
    <header>
        <nav className='w-full flex screen-max-width h-[90px] items-center bg-white border-b border-gray-300  px-6  '>
        <img src={mainLogo} height={70} width={70} alt="logo" className='mr-6'/>
        

        <div className="relative w-full flex flex-1 justify-center mx-auto">
      <div className="relative w-3/5">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 bg-slate-50 rounded-md "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
            
        />
        {inputValue === '' && (
          <div
            className="absolute inset-0 h-full flex items-center px-4 text-gray-500 pointer-events-none overflow-hidden bg-slate-50 rounded-md border-"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <span ref={textRef} className="w-full text-left bg-slate-50 ">
              Search "{displayedText}"
            </span>
          </div>
        )}
      </div>
    </div>

        <div className="flex items-baseline gap-9 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <button className='btn'>Log In</button>
          <button className='bg-main btn text-white'>My Cart</button>
              </div>

      </nav>
</header>
     
    


   
  );
}

export default App;