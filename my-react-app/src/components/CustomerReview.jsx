import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import StarDisplay from "./RatingDisplay";

const CustomerReview = () => {
  return (
    <div className="p-2 flex gap-5 bg-white rounded-lg shadow-lg">
      {/* avator  */}
      <div>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={34} icon={<UserOutlined />} />
          </Space>
        </Space>
      </div>
      {/* end avator  */}
          <div className="flex flex-col">
          <h2 className="font-semibold">Sapat Pandya</h2>
        <div className="flex  items-center gap-2">
          <StarDisplay />
          <p className="text-xs"> Received on 02 August</p>
              </div>
              <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default CustomerReview;
