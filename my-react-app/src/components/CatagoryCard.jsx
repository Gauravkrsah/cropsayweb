import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const CatagoryCard = ({ categoryItem }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      
      setWidth(window.innerWidth);

      setTimeout(() => {
        window.location.reload();
      },2000)
      
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      y: 90,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCategory = (title) => {
    navigate(`product/category/${title}`);
  };

  return (
    <div
      className=" w-16 h-16 max-h-18   md:min-w-48 md:max-w-48 md:h-full  rounded-2xl my-10 relative   items-center  md:border-main md:border-2 transition-all flex flex-col cursor-pointer md:mx-auto "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleCategory(categoryItem.title)}
    >
      <img
        src={categoryItem.img}
        alt=""
        className="md:opacity-40 hover:opacity-100 md:object-contain rounded-xl h-fit border-4 md:border-none"
        loading="lazy"
      />

      {width > 760 ? (
        <p
          ref={textRef}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-2xl font-semibold text-main "
        >
          {categoryItem.title.toUpperCase()}
        </p>
      ) : (
          <p className="my-2 text-sm font-semibold w-full text-center">{categoryItem.title}</p>
      )}
    </div>
  );
};

export default CatagoryCard;
