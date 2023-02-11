import React from "react";

import { Text, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const MainPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-[1024px] mx-[auto] pb-[90px] relative w-[100%]"
        style={{ backgroundImage: "url('images/img_mainpage.png')" }}
      >
        <div className="absolute md:h-[819px] sm:h-[819px] h-[885px] inset-x-[0] mx-[auto] top-[5%] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-end mb-[-16px] ml-[auto] mr-[109px] p-[11px] w-[59%] z-[1]">
            <div className="flex flex-col font-sfprodisplay items-center justify-end md:mt-[0] sm:mt-[0] mt-[2px] p-[2px] md:w-[100%] sm:w-[100%] w-[18%]">
              <Text
                className="mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                News
              </Text>
            </div>
            <div className="flex flex-col font-sfpro items-start justify-end md:w-[100%] sm:w-[100%] w-[15%]">
              <Text
                className="md:ml-[0] sm:ml-[0] ml-[11px] mt-[9px] not-italic text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Trading
              </Text>
            </div>
            <div className="flex flex-col font-sfpro items-center justify-end md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[25%]">
              <Text
                className="mt-[7px] not-italic text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Development
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer font-fw font-sfpro leading-[normal] mb-[14px] min-w-[127px] md:ml-[0] sm:ml-[0] ml-[53px] md:mt-[0] sm:mt-[0] mt-[2px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/creatorspage")}
            >
              UPLOAD
            </Button>
          </div>
          <div className="h-[819px] md:h-[auto] sm:h-[auto] mt-[auto] mx-[auto] w-[100%]">
            <Img
              src="images/img_kisspngblockch.png"
              className="h-[819px] m-[auto] object-cover w-[100%]"
              alt="kisspngblockch"
            />
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
              <List
                className="flex-col gap-[41px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_frame2.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameTwo"
                  />
                  <Img
                    src="images/img_frame3.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[298px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameThree"
                  />
                  <Img
                    src="images/img_frame4.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameFour"
                  />
                  <Img
                    src="images/img_frame6.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameSix"
                  />
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_frame5.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameFive"
                  />
                  <Img
                    src="images/img_frame7.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameSeven"
                  />
                  <Img
                    src="images/img_frame8.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameEight"
                  />
                  <Img
                    src="images/img_frame9.png"
                    className="common-pointer md:flex-1 sm:flex-1 h-[287px] sm:h-[auto] object-cover rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]"
                    onClick={() => navigate("/videodisplay")}
                    alt="FrameNine"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[0] md:px-[20px] sm:px-[20px] top-[0] w-[39%]">
          <Img
            src="images/img_logo.png"
            className="h-[485px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default MainPagePage;
