import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cropsay} from "../utils/utils";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const suggestions = ["Seeds", "Flowers", "Fertilizer", "Fruits", "Pineapple"];
  const suggestionRef = useRef([]);
  const searchBoxRef = useRef(null); 
  const [inputValue, setInputValue] = useState("");
  const [cartItem, setCartItem] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, delay: 0.5 });

    suggestions.forEach((_, index) => {
      timeline
        .fromTo(
          suggestionRef.current[index],
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7 }
        )
        .to(
          suggestionRef.current[index],
          { y: "-100%", opacity: 0, duration: 0.7 },
          "+=1"
        );
    });

    return () => {
      timeline.kill();
    };
  }, [suggestions]);

  return (
    <header className=" w-full sticky top-0 bg-[#ffffff] z-50 ">
  
      {/* show for mobile size */}
      <div className="px-6 md:hidden my-3 flex items-center justify-between">
        <img src={cropsay} alt="logo" width={100} />
        <FaRegUser className="text-black text-2xl" />
      </div>
      {/* end here  */}
      <nav className=" w-full flex screen-max-width justify-between h-[90px] items-center border-b border-gray-300  px-6">
        <div className="flex items-center">
          <img
            src={cropsay}
            height={100}
            width={120}
            alt="logo"
            className="hidden md:block  cursor-pointer"
            onClick={()=>navigate('/')}
          />
        </div>

        <a className={` hidden ${isExpanded ? "hidden" : "lg:flex block items-center gap-2"} `}>
          <IoLocationSharp />
          Detect location
        </a>

        {/* search bar  */}
        <form
          ref={searchBoxRef}  
          className={`relative md:w-2/5 w-full bg-[#ffffff] h-[50%] rounded-md flex items-center px-4 transition-all duration-300 border border-slate-300
             ${isExpanded ? "lg:md:w-3/5" : "md:w-2/5"}`}
          onClick={() => setIsExpanded(true)}
        >
          <IoSearchSharp className=" text-xl cursor-pointer" />
          <input
            type="text"
            className="w-full h-full  px-6 focus:outline-none text-sm bg- "
            placeholder="Search for seed plant and more"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!inputValue ? (
            ""
          ) : (
            <RxCross2
              className="bg-slate-100 cursor-pointer"
              onClick={() => setInputValue("")}
            />
          )}

          {!isFocused && inputValue === "" && (
            <div className="absolute left-10 w-4/5 h-full overflow-hidden flex items-center pointer-events-none border bg-[#ffffff] rounded-md border-none ">
              {suggestions.map((suggestion, index) => (
                <span
                  key={index}
                  ref={(el) => (suggestionRef.current[index] = el)}
                  className="absolute left-4 text-gray-500 w-full text-sm"
                >
                  Search "{suggestion}"
                </span>
              ))}
            </div>
          )}
        </form>
        {/* end of search bar  */}

        <div className="hidden cursor-pointer md:flex">
          <button className="px-6 py-3 rounded-md text-sm md:text-md">
            Log In
          </button>
          <button className="bg-main px-6 py-3 rounded-md text-white flex items-center gap-3 text-sm md:text-md">
            <IoCart className="bg-main text-2xl" />
            {cartItem === 0 ? (
              <p className="bg-main">My Cart</p>
            ) : (
              <span className="text-white bg-main">5 items</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;