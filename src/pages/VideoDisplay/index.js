import React from "react";

import { Img } from "components";
import { useNavigate } from "react-router-dom";

const VideoDisplayPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-[1024px] mx-[auto] pb-[127px] relative w-[100%]"
        style={{ backgroundImage: "url('images/img_mainpage.png')" }}
      >
        <div className="absolute h-[770px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] w-[100%]">
          <Img
            src="images/img_kisspngblockch.png"
            className="h-[770px] m-[auto] object-cover w-[100%]"
            alt="kisspngblockch"
          />
          <Img
            src="images/img_frame12.png"
            className="absolute h-[725px] inset-[0] justify-center m-[auto] object-cover rounded-radius20 w-[74%]"
            alt="FrameTwelve"
          />
        </div>
        <Img
          src="images/img_wonder111.png"
          className="common-pointer absolute h-[444px] left-[0] object-cover top-[0] w-[34%]"
          onClick={() => navigate("/")}
          alt="wonder111"
        />
      </div>
    </>
  );
};

export default VideoDisplayPage;
