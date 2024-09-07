import React from "react";
import StarDisplay from "../components/RatingDisplay";
import { Flex, Progress } from "antd";
import CustomerReview from "../components/CustomerReview";
import {  Tooltip } from 'antd';

const ReviewSection = () => {
  return (
    <div className=" my-0 py-20 ">
      <div className="flex flex-wrap md:justify-start gap-20 items-start">

        {/* aside  */}
        <aside className="flex flex-col bg-white py-5 px-6 rounded-lg md:h-[50vh] w-full">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          <hr className="border-black" />
          <div className="flex gap-3">
            <StarDisplay />
            <p>4.7</p>
          </div>
          <p>51 reviews</p>

          <div className="relative flex  md:justify-between items-center">

          <div className="my-20">
            <Flex
              vertical
              gap="large"
              style={{
                width: 250,
              }}
            >
              <div className="flex  ">
                <p className="text-xs text-nowrap mr-6">5 star</p>{" "}
                <Progress percent={50} size="small" status="active" />
              </div>
              <div className="flex  ">
                <p className="text-xs text-nowrap mr-6">4 star</p>{" "}
                <Progress percent={20} size="small" status="active" />
              </div>
              <div className="flex  ">
                <p className="text-xs text-nowrap mr-6">3 star</p>{" "}
                <Progress percent={20} size="small" status="active" />
              </div>
              <div className="flex  ">
                <p className="text-xs text-nowrap mr-6">2 star</p>{" "}
                <Progress percent={10} size="small" status="active" />
              </div>
              <div className="flex  ">
                <p className="text-xs text-nowrap mr-6">1 star</p>{" "}
                <Progress percent={10} size="small" status="active" />
              </div>
             
            </Flex>
          </div>
          <div className=" hidden sm:hidden lg:block mr-40  ">
              <Flex gap="150px" >
                <div className="flex flex-col">
                  <Progress type="dashboard" percent={75} gapDegree={25} />
                  <p className="my-5">Positive Review</p>
                </div>
                
                <div className="flex flex-col">
                  <Progress type="dashboard" percent={25} gapDegree={30} trailColor="red" />
                  <p className="my-5 text-nowrap">Negative Review</p>
                  </div>
                
  </Flex>
          </div>

          </div>

          
        </aside>
        {/* end aside  */}
     

      {/* customer review  */}
      <div className="flex flex-col px-2 gap-5 bg-slate-200 py-6 pb-0 overflow-y-scroll h-[50vh] rounded-lg w-full relative">
        
          <CustomerReview />
          <CustomerReview />
          <CustomerReview/>
          
<CustomerReview/>

<CustomerReview/>
          
          <CustomerReview />
          
          <button className="w-full bg-[#ffffff] py-3   text-black sticky bottom-1 rounded-lg border-2">View All Reviews</button>


      </div>
        {/* end customer review  */}
        </div>
    </div>
  );
};

export default ReviewSection;
