import React, { useEffect, useState } from "react";
import { changeImg } from "../utils/utils";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/consonants";
import { mainLogo } from "../utils/utils";
import { categories } from "../utils/consonants";


import CatagoryCard from "../components/CatagoryCard";

const Home = () => {

  const [categoriesItems, setCategoriesItems] = useState([]);
 

  useEffect(() => {
    setCategoriesItems(categories)
  },[])




  return (
    <main className=" md:px-20 min-h-[100vh] px-4">
      {/* product showing div */}

      <div className=" bg-main my-8  hidden md:flex justify-between rounded-lg px-10 py-10 ">
        <div className=" flex flex-col gap-10">
          <h1 className="font-secondary text-white text-2xl">TOMATO SEEDS</h1>
          <p className="text-white text-xl">Buy now, you won't regret later</p>
          <button className="bg-green-700 px-6 py-3 text-white rounded-md  fill-effect">
            <span>Shop Now</span>
          </button>
        </div>
        <div>
          <img src={changeImg} alt="" width={200} className="rounded-lg mx-6" />
        </div>
      </div>
      {/* end of the product showing div  */}

      {/* categories  */}

      <div>
        <h1 className="text-xl my-3 font-bold ">CATEGORIES</h1>
      </div>
      <div className="w-full flex  flex-wrap overflow-x-scroll  justify-start my-10 sm:gap-8 gap-2">
                   
        
        {
          categoriesItems.map((categoryItem,idx) => (
            <CatagoryCard key={idx} categoryItem={ categoryItem} />
          ))
        }
        
        
        
      </div>

      {/* end  */}

      {/* featured product section  */}
      <div className="flex my-6 justify-between ">
        <h1 className="text-xl font-bold ">BEST SELLER</h1>
        <NavLink to="" className="text-main">
          View all
        </NavLink>
      </div>


      <div className=" flex  overflow-x-scroll  mx-0    lg:grid-cols-6   gap-8  ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* end  */}
    </main>
  );
};

export default Home;
