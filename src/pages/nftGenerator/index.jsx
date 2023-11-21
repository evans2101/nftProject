import React from "react";
import Header from "../../components/header";
import "./ngc.css";
import Ncg from "../../components/card/nftCollection";
import DataNcg from "../../components/card/data Ncg";

function index() {
  return (
    <div className="containerImgNgc">
      <Header />
      <div className="Content1Ncg">
      <button className="connectWallet">Connect Wallet</button>
        <div className="ContentNcg">
        <Ncg />
        <DataNcg />
        </div>
        <div className="footerNcg">
          <span className="contentFooterNcg">
            <h3>Mint an NFT</h3>
            <p>Create a collection and mint NFTs direcly yo your wallet</p>
          </span>
          <span className="contentFooterNcg1">
            <p className="logoFootNcg">Logo</p>
            <p>Powered by Logo</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default index;
