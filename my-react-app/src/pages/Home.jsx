import React, { useEffect, useState } from "react";
import { changeImg } from "../utils/utils";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/consonants";
import { mainLogo } from "../utils/utils";
import { categories } from "../utils/consonants";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";


import CatagoryCard from "../components/CatagoryCard";

const Home = () => {
  const navigate = useNavigate();

  const [categoriesItems, setCategoriesItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current product index
  const [currentProduct, setCurrentProduct] = useState(products[0]); // Initialize with the first product
 

  useEffect(() => {
    setCategoriesItems(categories)
  }, [])

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    setCurrentProduct(products[currentIndex]);
    gsap.fromTo(
      ".product-animation",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [currentIndex]);


  return (
    <main className=" md:px-20 min-h-[100vh] px-4">
      {/* product showing div */}

      <div className=" bg-main my-8  hidden md:flex justify-between rounded-lg px-10 py-10">
        <div className=" flex flex-col gap-10">
          <h1 className="font-secondary text-white text-2xl" >{currentProduct.about}</h1>
          <p className="text-white text-xl">Buy now, you won't regret later</p>
          <button className="bg-green-700 px-6 py-3 text-white rounded-md  fill-effect">
            <span>Shop Now</span>
          </button>
        </div>
        <div className=" max-h-64 min-h-64 flex items-center">
          <img  src={currentProduct.img}
          alt={currentProduct.name}
          width={200}
          className="rounded-lg mx-6 product-animation "/>
        </div>
      </div>
      {/* end of the product showing div  */}

      {/* categories  */}

      <div>
        <h1 className="text-xl my-3 font-bold ">CATEGORIES</h1>
      </div>
      <div className="w-full sm:flex sm:flex-wrap my-10 sm:gap-8 gap-2 grid grid-cols-4 place-items-center">
                   
        
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
        <NavLink to="/product/category/all" className="text-main" >
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
