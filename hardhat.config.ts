import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

// console.log("Alchemy API Key:", process.env.ALCHEM_APIKEY);
// console.log("Sepolia Private Key:", process.env.SEPOLIA_PRIVATE_KEY); 

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEM_APIKEY}`,
      accounts: process.env.SEPOLIA_PRIVATE_KEY ? [process.env.SEPOLIA_PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
