import { HardhatUserConfig } from "hardhat/config";
import Config from "./helper-hardhat-config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";

import dotenv from "dotenv";
dotenv.config();

const { ALCHEMY_URL, METAMASK_KEY } = process.env;
const MAINNET_RPC_URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = METAMASK_KEY;
const config: HardhatUserConfig = {
  defaultNetwork: "polygonMumbai",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://localhost:8545",
      chainId: 1337,
      accounts: ["0xYOUR_PRIVATE_KEY"],
    },
    polygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      accounts: [String(PRIVATE_KEY)],
    },
  },
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
