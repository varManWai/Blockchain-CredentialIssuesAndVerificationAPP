import Web3 from "web3";

console.log("some shitter");

const path = require("path");

const dotenv = require("dotenv");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

let web3;
try {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
  } else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        process.env.INFURA
    );
    web3 = new Web3(provider);
  }
} catch (err) {
  console.log(err);
}

export default web3;
