import React, { useEffect, useState } from "react";
import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from "react-icons/io";


const StarDisplay = ({ avgRating=4.5 }) => {
  const [avgRatingStar, setAverageRatingStar] = useState(
    Array(5).fill([false, false])
  );

  useEffect(() => {
    const setStar = () => {
      let fullStars = Math.floor(avgRating);
      let halfStar = avgRating % fullStars;
      const temp = Array(5).fill([false, false]);
      temp.fill([true, true], 0, fullStars);
      halfStar && (temp[fullStars] = [true, false]);
      setAverageRatingStar(temp);
    };
    setStar();
  }, [avgRating]);

  return (
    <section className="rating-stars flex">
      {avgRatingStar.map((star, index) => {
        return (
          <div key={index} className="star text-yellow-400 ">
            {star[0] && star[1] && <IoMdStar size="25px" />}
            {star[0] && !star[1] && <IoMdStarHalf size="25px" />}
            {!star[0] && !star[1] && <IoMdStarOutline size="25px" />}
          </div>
        );
      })}
 
    </section>
  );
};

export default StarDisplay;