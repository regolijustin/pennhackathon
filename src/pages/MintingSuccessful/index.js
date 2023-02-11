import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const MintingSuccessfulPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sfpro h-[1024px] mx-[auto] pb-[135px] relative w-[100%]"
        style={{ backgroundImage: "url('images/img_mainpage.png')" }}
      >
        <div className="absolute h-[747px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] max-w-[1417px] md:px-[20px] sm:px-[20px] w-[100%]">
          <Img
            src="images/img_kisspngblockch_747x1417.png"
            className="absolute h-[747px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
            alt="kisspngblockch"
          />
          <Text
            className="absolute bottom-[44%] font-normal inset-x-[0] mx-[auto] not-italic text-left text-white_A700 w-[max-content]"
            as="h1"
            variant="h1"
          >
            MINTED!
          </Text>
          <div className="absolute bg-deep_purple_900_30 bottom-[34%] h-[201px] inset-x-[0] mx-[auto] rounded-radius20 w-[46%]"></div>
        </div>
        <Img
          src="images/img_wonder113.png"
          className="common-pointer absolute h-[457px] left-[0] object-cover top-[0] w-[36%]"
          onClick={() => navigate("/")}
          alt="wonder113"
        />
      </div>
    </>
  );
};

export default MintingSuccessfulPage;
