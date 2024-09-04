import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LuListFilter } from "react-icons/lu";
import { Select } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/consonants";

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const navigate = useNavigate();

  const datas = ["seed", "fertilizer", "plant", "honey", "tools", "honey"];
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(2000);




  console.log(fromPrice);

  return (
    <div className="mx-7 md:mx-32">
      {/* Heading */}
      <div className="py-5 flex  flex-col gap-9 overflow-x-scroll">
      
       
        <div className="md:flex grid grid-cols-4 gap-3 md:gap-10 my-4 md:justify-between ">
          {datas.map((data, index) => (
            <div
              key={index}
              className="bg-slate-50 flex  px-3 md:px-14 rounded-2xl py-2  shadow-md"
            >
              <p className="text-xs md:text-base">{data}</p>
            </div>
          ))}
        </div>
      </div>
      {/* end */}

      <hr className="border b-black my-5" />

      {/* filter */}
      <div className="flex flex-wrap justify-between items-center md:sticky md:top-[90px] sticky top-[135px] bg-[#ffffff] md:h-20 z-10 h-50 py-2 border-b-2 md:border-none">
        <div className="flex items-center gap-5">
          <div className="bg-main text-white md:p-3 rounded-[50%] p-1">
            <LuListFilter />
          </div>
          <p className="md:text-lg  text-xs">Filter by:</p>
          
        </div>
        <div className="md:ml-10 my-4 w-full md:w-fit">
          <Select className="md:w-60 w-full" placeholder="Sort by: Most popular">
            <Select.Option value="most popular">Most Popular</Select.Option>
            <Select.Option value="newest">Newest</Select.Option>
          </Select>
        </div>
      </div>
      {/* end */}

      {/* hero */}
      <div className=" w-full flex my-10 gap-8 ">
        {/* aside */}
        <div className="border b-slate-300 p-6 flex flex-col w-1/2  rounded-lg shadow-2xl h-fit sticky top-44 hidden lg:block">
          <p className="text-lg font-semibold">Price range</p>
          <div className="flex justify-evenly gap-5 my-5">
            <input type="number" className="bg-white text-center py-2 rounded-lg w-36" placeholder="From" value={fromPrice} onChange={(e)=>setFromPrice(e.target.value)} />
           <input type="number"  className="bg-white text-center  py-2 rounded-lg w-36" placeholder="To"  value={toPrice} onChange={(e)=>setToPrice(e.target.value)}/>
          </div>
          <input type="range"  />

          <div className="my-4 flex flex-col justify-start">
            <p className="my-3">Brand</p>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
          </div>

          <div className="my-4 flex flex-col justify-start">
            <p className="my-3">Brand</p>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
          </div>


          <div className="my-4 flex flex-col justify-start">
            <p className="my-3">Brand</p>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3  cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-4 w-4 rounded-[50%] border-4 border-green-500"></div>
              <p>Brand A</p>
            </div>
          </div>
          
        </div>

        {/* end aside */}

        {/* components  */}

        <div className="md:flex md:flex-wrap justify-start gap-2 md:gap-10 grid grid-cols-2 mx-auto ">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>

        {/* end
         */}
      </div>
      {/* end */}
    </div>
  );
};

export default Details;
