import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SearchBox = () => {
  const suggestions = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
  const suggestionRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, delay: 0.5 });
    
    suggestions.forEach((_, index) => {
      timeline.fromTo(
        suggestionRef.current[index],
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1 }
      ).to(suggestionRef.current[index], { y: '-100%', opacity: 0, duration: 1 }, '+=1');
    });
  }, [suggestions]);

  return (
    <>
    <div className="relative w-full max-w-md mx-auto mt-10 ">
      <div className="relative ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 w-full h-full overflow-hidden flex items-center pointer-events-none bg-black">
          {suggestions.map((suggestion, index) => (
            <span
              key={index}
              ref={(el) => suggestionRef.current[index] = el}
              className="absolute left-4 text-gray-500"
            >
              {suggestion}
            </span>
          ))}
        </div>
      </div>
      </div>
      





{/* 
        <div className="relative md:w-2/5 w-full  lg:block ">
          <div className="relative  ">
            <input
              type="text"
              className="w-full p-4 border border-black rounded-md focus:outline-none h-12 transition-all duration-300 ease-in-out focus:w-96"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {inputValue === "" && (
                          <div className="absolute inset-y-0 left-0 w-full h-full overflow-hidden flex items-center pointer-events-none border   rounded-md ">
                              <IoSearchSharp className="" />
                              {suggestions.map((suggestion, index) => (
                    
                  <span
                    key={index}
                    ref={(el) => (suggestionRef.current[index] = el)}
                    className="absolute left-4 text-gray-500"
                  >
                    Search "{suggestion}"
                  </span>
                ))}
              </div>
            )}
          </div>
        </div> */}







</>

    
    
    
    
    
    
    
    
  );
};

export default SearchBox;