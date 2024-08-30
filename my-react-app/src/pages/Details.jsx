import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-10 lg:mx-32">
      {/* Heading */}
      <div className="py-5 flex flex-col gap-9">
        <div className="flex justify-start gap-4 items-center">
          <FaArrowLeft
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p>Back to home page</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-3">
            10 results for agriculture
          </h1>
        </div>
        <div className="flex gap-10 my-5">
          {datas.map((data, index) => (
            <div
              key={index}
              className="bg-slate-50 flex px-14 rounded-2xl py-3 mx-auto shadow-xl"
            >
              {data}
            </div>
          ))}
        </div>
      </div>
      {/* end */}

      <hr className="border b-black my-5" />

      {/* filter */}
      <div className="flex justify-between items-center sticky top-[90px] bg-[#ffffff] h-20 z-10">
        <div className="flex items-center gap-5">
          <div className="bg-main text-white p-3 rounded-[50%]">
            <LuListFilter />
          </div>
          <p>Filter by:</p>
          <div className="bg-slate-100 px-5 py-2 rounded-2xl shadow-md">
            Brand
          </div>
          <div className="bg-slate-100 px-5 py-2 rounded-2xl shadow-md">
            Type
          </div>
          <div className="bg-slate-100 px-5 py-2 rounded-2xl shadow-md">
            Price
          </div>
          <div className="bg-slate-100 px-5 py-2 rounded-2xl shadow-md">
            Availability
          </div>
        </div>
        <div className="mx-10">
          <Select className="w-60" placeholder="Sort by: Most popular">
            <Select.Option value="most popular">Most Popular</Select.Option>
            <Select.Option value="newest">Newest</Select.Option>
          </Select>
        </div>
      </div>
      {/* end */}

      {/* hero */}
      <div className=" w-full flex my-10 gap-8 ">
        {/* aside */}
        <div className="border b-slate-300 p-6 flex flex-col w-1/2 top-[500px] rounded-lg shadow-2xl h-fit sticky top-44">
          <p className="text-lg font-semibold">Price range</p>
          <div className="flex justify-evenly gap-6 my-5">
            <div className="bg-white px-12 py-2 rounded-lg">$2.40</div>
            <div className="bg-white px-12 py-2 rounded-lg">$2.40</div>
          </div>
          <input type="range" />

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

        <div className="flex flex-wrap justify-start gap-11">
          {products.map((product, index) => (
            <ProductCard product={product} />
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
