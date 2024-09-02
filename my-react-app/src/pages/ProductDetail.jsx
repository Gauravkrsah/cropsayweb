import React, { useEffect, useState } from "react";
import { changeImg } from "../utils/utils";
import { mainLogo, cropsay } from "../utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";
import { Breadcrumb } from "antd";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiContactlesspayment } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";

const ProductDetail = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "20px",
    className: "slider-with-gap",
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const images = [changeImg, mainLogo, cropsay, , mainLogo, cropsay];

  const [currentImg, setCurrentImg] = useState(images[0]);
  const [itemCount, setItemCount] = useState(1);


  const handleChangeImg = (i) => {
    console.log(images[i]);
    setCurrentImg(images[i]);
  };

  return (
    <div className="mx-10 lg:mx-20 my-10 min-h-[100vh]">
      {/* photo and details  */}

      <div className="flex flex-wrap lg:flex justify-between  ">
        <div className="lg:w-[30%]   w-full ">
          {/* imgage and thumbnail  */}

          <div className="flex flex-col justify-between border-2 shadow-lg rounded-lg  ">
            <div className="flex justify-center p-10">
              <img
                src={currentImg}
                alt=""
                className=" min-h-[40vh] sm:min-h-[48vh] object-contain max-h-[48vh]"
                width={500}
              />
            </div>

            <div className="slider-container  mx-10 sm:mx-10 flex flex-col   my-2 ">
              <Slider {...settings}>
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className=" border-2   "
                    onClick={() => handleChangeImg(idx)}
                  >
                    <img
                      src={images[idx]}
                      alt=""
                      height={500}
                      className=" object-contain  lg:h-20 h-6 sm:h-20 sm:min-h-16 max-h-10 mx-auto"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* end image and thumbnail  */}
        </div>

        {/* right detail  */}

        <div className="md:w-[65%] w-full  py-10 px-7 ">
          <div className="flex flex-col gap-1">
            <Breadcrumb
              items={[
                {
                  title: <a href="/">Home</a>,
                },

                {
                  title: <a href="">Product</a>,
                },

                {
                  title: <a href="">name</a>,
                },
              ]}
            />
            <h2 className="text-2xl font-extrabold">Bio Vercide</h2>
            <p className="text-sm">Brand Name</p>
            <div className="flex items-center gap-4">
              <Rate className="text-sm" />
              <p className="bg-main rounded-md py-1 px-2 text-xs  text-[#ffffff]">4.7</p>{" "}
              <p className="text-xs">54 reviews</p>
            </div>
            <div className="my-5 flex gap-5 "> 

            <p className="text-lg ">Rs. 630</p>
              <p className="text-lg line-through">Rs. 910</p>
              <p className="bg-main rounded-md py-1 px-2 text-xs text-[#ffffff] ">50% off</p>{" "}

        
              


            </div>

            <hr />
            <p className="my-2"> Select Varient</p>

            {/* size selection  */}
            <div className="flex flex-wrap justify-start gap-12 ">
              <div className="bg-main py-3 px-8 rounded-lg text-[#ffffff] ">var1</div>
              <div className="bg-main py-3 px-8 rounded-lg text-[#ffffff] ">var1</div>
              <div className="bg-main py-3 px-8 rounded-lg text-[#ffffff] ">var1</div>
              <div className="bg-main py-3 px-8 rounded-lg text-[#ffffff] ">var1</div>

             

            </div>
            {/* end of size selection  */}

            {/* add to cart and quantity  */}

            <div className="flex gap-5 my-6">
              <button className="bg-main text-[#ffffff] px-5 py-2 rounded-lg">Add to Cart</button>
              <div className="px-5 py-2 rounded-lg bg-main text-white flex gap-8">
                <button onClick={() => {
                  if (itemCount > 1) {
                    setItemCount((prev)=>prev-1)
                  }
                }} >-</button>
                {itemCount}
                <button onClick={()=>setItemCount((prev)=>prev+1)}>+</button>
              </div>
              
            </div>
            {/* end add to cart and quantity  */}
            
          </div>

          {/* product origin  */}
          <div className="my-4 flex flex-col gap-2">
            <p className="text-xs">Country of Origin India</p>
            <p className="text-xs">Secure Payment</p>
            
            <p className="text-xs">In stock, Ready to ship</p>

              
            
          </div>
          {/* end of product origin  */}

        </div>

        {/* end right detail  */}
      </div>


      {/* end photo and details  */}


<hr className="my-10" />


      {/* product details text detail  */}

      <h2 className="text-xl font-semibold mb-5">Product Details</h2>
      <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit eum voluptates recusandae saepe dolorum quia placeat incidunt? Nam, fugit repudiandae laboriosam tempora harum, asperiores voluptatibus animi corporis, sunt nostrum in.
      Velit optio delectus sed, iste accusamus reprehenderit obcaecati suscipit itaque. Sapiente excepturi pariatur neque distinctio veniam eius laboriosam quaerat quod fugit mollitia, cumque laborum nihil ut in, similique dolore et!
      Voluptatum, quis odio alias cupiditate ullam cum, sapiente voluptatibus saepe atque tempora quaerat ut impedit ab harum debitis hic voluptatem veritatis. Autem dolores, voluptate delectus facilis amet molestiae eum dolorum!
      Atque aut laborum sed illum blanditiis sequi dignissimos distinctio deserunt ipsam ipsa est inventore qui praesentium dolorum culpa tempora unde ratione dolore, eveniet at repellendus? Magni soluta itaque sapiente optio?
      Beatae error saepe voluptates modi aliquam itaque, explicabo blanditiis recusandae tenetur excepturi ipsum eligendi, nobis officia nihil dolorem. Deleniti error quibusdam officia nam at ab doloremque, quam sapiente maxime provident!
      Ratione quas culpa iusto, minima labore ipsam rem et, eaque necessitatibus cupiditate sed modi eveniet optio facere illo? Hic, reprehenderit. Nobis accusamus incidunt porro error totam fugit possimus ab obcaecati?
      At perspiciatis delectus tenetur corrupti officia suscipit consequuntur vero voluptate molestiae animi aut, quidem possimus! Aut, quo aperiam! Dolore odit, delectus dignissimos fuga vero accusamus id velit dolores et ducimus.
      Ullam, consequuntur at? Quia alias, ea corporis perferendis id molestiae autem nemo molestias at tenetur cupiditate corrupti sequi ipsam soluta, nostrum tempore itaque commodi consequatur officia nesciunt odit eligendi non.
      Inventore sed culpa consectetur. Reprehenderit ex dolor possimus, laboriosam esse quae suscipit recusandae veniam unde pariatur, nobis sequi. Dolorem saepe enim repellendus blanditiis commodi quo rem eveniet autem! At, maxime.
      Obcaecati, nulla laborum quam fugiat architecto sit accusantium dolor officia optio exercitationem. Veritatis ea aspernatur totam quis impedit pariatur quos voluptates nulla doloremque? Nulla totam quis dolore, ducimus itaque laborum.</p>




      {/*end product details text detail  */}



      {/* tags  */}

      <div className="my-10 bg-main rounded-lg text-[#ffffff] flex justify-evenly p-7">

                <div><CiDeliveryTruck /></div>
                <div><SiContactlesspayment /></div>
                <div><AiOutlineSafety /> </div>
      </div>



      {/* end tags  */}

    </div>
  );
};

export default ProductDetail;
