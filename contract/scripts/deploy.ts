import { ethers } from "hardhat";

async function main() {
  const testNFT = await ethers.getContractFactory("testNFT");
  console.log(testNFT);
  const testNFTContract = await testNFT.deploy();
  console.log(testNFTContract);
  const Contract = await testNFTContract.deployed();
  console.log("deployed to : ", Contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
