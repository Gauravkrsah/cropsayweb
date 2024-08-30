import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';


const CatagoryCard = ({categoryItem}) => {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      y: 0,
        duration: 0,
      ease:"power2.out"
    })

  }, [])

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      y: 90,
        duration: 0.5,
      ease:"power2.out"
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      y: 0,
        duration: 0.5,
      ease:"power2.out"
    })
  }
  return (
    
       <div className=" min-w-48 max-w-48  rounded-2xl my-10 relative max-h-18 bg-  border-main border-2 transition-all flex items-center cursor-pointer mx-auto "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={categoryItem.img}
              alt=""
            className="opacity-40 hover:opacity-100 object-center rounded-xl"
          />
          <p ref={textRef } className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-2xl font-semibold text-main ">
            {categoryItem.title.toUpperCase()}
          </p>
        </div>
  
  )
}

export default CatagoryCard
