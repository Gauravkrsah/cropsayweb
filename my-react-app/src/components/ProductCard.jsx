import React, { useState } from "react";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { scrollTop } from "../main";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [showQuantityOpt, setShowQuantityOpt] = useState(false);
  const { showScrollTop, setShowScrollTop } = useContext(scrollTop);
  const navigate = useNavigate();

  const handleProductDetails = (productId) => {
    setShowScrollTop((prev) => !prev);
    navigate(`/product/detail/${productId}`);
  };

  return (
    <>
      <div className="flex flex-col border border-slate-200 rounded-lg relative p-3 justify-between  min-w-56  shadow-sm   ">
        {/* discount and wishlist */}

        <div className="flex  justify-between mb-6 ">
          <p className="bg-orange-400 absolute left-0 top-0 p-2 rounded-tl-lg rounded-br-2xl text-xs">
            50% OFF
          </p>
          <div
            className="text-2xl absolute right-3 top-1 hover:cursor-pointer "
            onClick={() => setLiked((prev) => !prev)}
          >
            {" "}
            {liked ? <IoMdHeart className="text-main" /> : <CiHeart />}
          </div>
        </div>

        {/* end here  */}
        <div
          className="flex justify-center mb-4  cursor-pointer"
          onClick={() => handleProductDetails(product.id)}
        >
          <img src={product.img} alt="" width={100} />
        </div>

        <div className="flex flex-col ">
          <p
            className="text-sm font-medium cursor-pointer"
            onClick={() => handleProductDetails(product.id)}
          >
            {product.about}
          </p>
          <p className="text-xs text-slate-500">{product.brand}</p>
          {/* reviews  */}
          <div className="flex gap-3">
            <p className="font-sans text-sm my-3 ">Nrs {product.price} </p>
            <p className="font-sans text-sm my-3 line-through text-slate-500 ">
              Nrs 300{" "}
            </p>
          </div>

          {/* size  */}

          <div className="flex gap-3 mb-3 items-center ">
            <p className="text-sm">Size</p>
            <div
              className="border border-gray-500 px-5 py-1 rounded-lg flex items-center gap-2 cursor-pointer"
              onClick={() => setShowQuantityOpt((prev) => !prev)}
            >
              <p className="text-sm">{product.size[0]}</p>
              <IoIosArrowDown />
            </div>
          </div>

          {/* end  */}

          <div className="border border-1  bg-green-700 text-center py-1 my-1 border-main rounded-md cursor-pointer text-white hover:bg-main hover:text-white transition-all ease-in-out duration-300 ">
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
