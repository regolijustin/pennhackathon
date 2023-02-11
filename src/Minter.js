import { useEffect, useState } from "react";
import {FileUploaderInfura} from "./util/infura";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "./util/interact.js";
import fileUrlExposed from "./util/infura"
const Minter = () => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("");

    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);

        addWalletListener();
    }, []);

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
            window.ethereum.on("accountsChanged", (accounts) => {
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

  return (
    <div className="Minter">
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

      <br></br>
      <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
      <p>
        Simply add your asset's link, name, and description, then press "Mint."
      </p>
      <form>
        <h2>🖼 Select File </h2>
          <FileUploaderInfura></FileUploaderInfura>
        <h2>🤔 Name: </h2>
        <input
          type="text"
          placeholder="e.g. My first NFT!"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          onChange={(event) => setDescription(event.target.value)}
        />
        <h2> Category of content: </h2>
          <select name="selectedFruit"
                  onChange={(event) => setCategory(event.target.value)}>
              <option value="Web3">Web3</option>
              <option value="Science">Science</option>
              <option value="Math">Math</option>
              <option value="Social-Studies">Social Studies</option>
              <option value="Art">Art</option>
          </select>
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};


export default Minter;
