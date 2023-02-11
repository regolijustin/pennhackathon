import { useEffect, useState } from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "../../functions/interact";
import fileUrlExposed, {FileUploaderInfura} from "../../functions/infura";


const CreatorsPage = () => {
  const navigate = useNavigate();
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("");

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT(fileUrlExposed, name, category, description);
    setStatus(status);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsCha<button id=\"mintButton\" onClick={onMintPressed}>\n" +
        "        Mint NFT\n" +
        "      </button>nged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }


  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener();
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sfpro h-[1024px] mx-[auto] pb-[116px] relative w-[100%]"
        style={{ backgroundImage: "url('images/img_mainpage.png')" }}
      >
        <div className="absolute md:h-[770px] sm:h-[770px] h-[792px] inset-[0] justify-center m-[auto] w-[100%]">
          <Img
            src="images/img_kisspngblockch.png"
            className="absolute h-[770px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
            alt="kisspngblockch"
          />
          <div className="absolute bg-white_A700_33 flex flex-col h-[max-content] inset-y-[0] justify-end my-[auto] p-[14px] right-[9%] rounded-radius20 w-[78%]">
            <Text
              className="font-bold font-sfprotext md:ml-[0] sm:ml-[0] ml-[12px] mr-[734px] mt-[21px] text-deep_purple_900_c1 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              NFT MINTER
            </Text>
            <Text
              className="font-sfprorounded md:ml-[0] sm:ml-[0] ml-[19px] mr-[118px] mt-[31px] not-italic text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Add your NFT’s link, name and category, then press ‘Mint’
            </Text>
            <div className="font-sfpro md:h-[401px] sm:h-[401px] h-[473px] mr-[533px] mt-[11px] relative md:w-[100%] sm:w-[100%] w-[52%]">
              <div className="absolute bottom-[0] flex flex-col items-center justify-end pt-[25px] right-[0] w-[83%]">
                <div className="h-[118px] md:h-[91px] sm:h-[91px] relative w-[100%]">
                  <Text
                    className="absolute left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Link:
                  </Text>
                  <FileUploaderInfura></FileUploaderInfura>
                </div>
                <div className="h-[109px] md:h-[136px] sm:h-[136px] mt-[45px] relative w-[100%]">
                  <input
                    type="text"
                    placeholder="e.g. My first NFT!"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Text
                    className="absolute left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Name:
                  </Text>
                </div>
                <div className="h-[107px] md:h-[138px] sm:h-[138px] mt-[47px] relative w-[100%]">
                  <select name="selectedFruit"
                          onChange={(event) => setCategory(event.target.value)}>
                    <option value="Web3">Web3</option>
                    <option value="Science">Science</option>
                    <option value="Math">Math</option>
                    <option value="Social-Studies">Social Studies</option>
                    <option value="Art">Art</option>
                  </select>
                  <Text
                    className="absolute left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Category:
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_pngtransparent.png"
                className="absolute h-[110px] left-[0] rounded-radius50 top-[0] w-[21%]"
                alt="pngtransparent"
              />
              <Img
                src="images/img_pngtransparent.png"
                className="absolute h-[110px] left-[0] rounded-radius50 top-[30%] w-[21%]"
                alt="pngtransparent One"
              />
              <Img
                src="images/img_pngtransparent.png"
                className="absolute bottom-[13%] h-[110px] left-[0] rounded-radius50 w-[21%]"
                alt="pngtransparent Two"
              />
            </div>
            <button id="mintButton" onClick={onMintPressed}>
              Mint NFT
            </button>
          </div>
        </div>
        <Img
          src="images/img_wonder112.png"
          className="common-pointer absolute h-[446px] left-[0] object-cover top-[0] w-[36%]"
          onClick={() => navigate("/")}
          alt="wonder112"
        />
        <button id="walletButton" onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>
      <p id="status">
        {status}
      </p>
    </>
  );
};

export default CreatorsPage;
