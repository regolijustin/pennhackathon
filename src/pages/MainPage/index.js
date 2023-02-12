import React, {useEffect, useState} from "react";

import { Text, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPlayer from 'react-player'

import "./displayNFT.css"

const MainPagePage = () => {
  const navigate = useNavigate();

  const [projectListData, setProjectListData] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(0);

  useEffect(() => {
    const getNFTs = async () => {
      const options = {
        method: "GET",
        url: "https://testnets-api.opensea.io/api/v1/assets",
        params: {
          order_direction: "asc",
          offset: "0",
          limit: "20",
          asset_contract_address: "0xBe1fDC8aC765D2dc746a1afca40E87c2099f10EF",
        },
      };

      axios
          .request(options)
          .then(function (response) {
            setProjectListData(response.data.assets);
          })
          .catch(function (error) {
            console.error("err: ", error);
          });
    };

    getNFTs();
  }, []);


  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-[1024px] mx-[auto] pb-[90px] relative w-[100%]"
        style={{ backgroundImage: "url('images/img_mainpage.png')" }}
      >
        <div className="absolute md:h-[819px] sm:h-[819px] h-[885px] inset-x-[0] mx-[auto] top-[5%] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-end mb-[-16px] ml-[auto] mr-[109px] p-[11px] w-[59%] z-[1]">
            <div className="flex flex-col font-sfprodisplay items-center justify-end md:mt-[0] sm:mt-[0] mt-[2px] p-[2px] md:w-[100%] sm:w-[100%] w-[18%]">
            </div>
            <div className="flex flex-col font-sfpro items-start justify-end md:w-[100%] sm:w-[100%] w-[15%]">
            </div>
            <div className="flex flex-col font-sfpro items-center justify-end md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[25%]">
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
                {projectListData.length > 0 && (
                    <>
                      <NFTList
                          projectListData={projectListData}
                          setProjectListData={setSelectedNFT}
                      />
                    </>
                )}

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


const NFTList = ({ projectListData, setProjectListData }) => {
  return (
      <div className="punklist">
        {projectListData.map((punk) => (
            <div key={punk.token_id} onClick={() => setProjectListData(punk.token_id)}>
              <CollectionCard
                  name={punk.name}
                  traits={punk.traits}
              />
              <ReactPlayer
                  className='react-player fixed-bottom'
                  url= './mainvid.mp4'
                  width='100%'
                  height='100%'
                  controls = {true}

              />
            </div>
        ))}
      </div>
  );
};
const CollectionCard = ({ id, name, traits, image }) => {
  return (
      <div className="collection-card">
        <div className="details">
          <div className="name">
            {name}
          </div>
          <div className="price-container">
            <div className="price">{traits[0]?.value}</div>
          </div>
        </div>
      </div>
  );
};

const Main = ({ selectedNFT, projectListData }) => {
  const [activeNFT, setActiveNFT] = useState(projectListData[0]);

  useEffect(() => {
    setActiveNFT(projectListData[selectedNFT]);
  }, [projectListData, selectedNFT]);

  return (
      <div className="main">
        <div className="main-content">
          <div className="punk-highlight">
            <div className="punk-container">
              <img
                  className="selected-punk"
                  src={activeNFT.image_original_url}
              />
            </div>
          </div>

          <div className="punk-details">
            <div className="title">
              {activeNFT.name}{" "}
              <span className="item-number">#{activeNFT.token_id}</span>
            </div>
          </div>
        </div>
      </div>
  );
};


export default MainPagePage;
