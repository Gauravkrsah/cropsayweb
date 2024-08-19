import React, { useState } from "react";
import { changeImg } from "../utils/utils";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/consonants";

const Home = () => {

    console.log(products)


    return (
      
    <main className=" md:px-20 min-h-[100vh] px-4">
      {/* product showing div */}

      <div className=" bg-main my-8  hidden md:flex justify-between rounded-lg px-10 py-10 ">
        <div className=" flex flex-col gap-10">
         
                  <h1 className="font-secondary text-white text-2xl">TOMATO SEEDS</h1>
                  <p className="text-white text-xl">Buy now, you won't regret later</p>
                  <button className="bg-green-700 px-6 py-3 text-white rounded-md  fill-effect"><span>Shop Now</span></button>
        </div>
        <div>
          <img src={changeImg} alt="" width={200} className="rounded-lg mx-6" />
        </div>
      </div>
          {/* end of the product showing div  */}
          

          {/* featured product section  */}
          <div className="flex my-6 justify-between ">
              <h1 className="text-xl ">BEST SELLER</h1>
              <NavLink to='' className="text-main">View all</NavLink>
           
          </div>


          <div className=" flex  overflow-x-scroll  mx-0    lg:grid-cols-6 md:mx-10  gap-5  justify-evenly ">
                {
                    products.map((product, index) => (
                        < ProductCard key={index} product={product} />
                    ))
            }
          </div>

          {/* end  */}
    </main>
  );
};

export default Home;
