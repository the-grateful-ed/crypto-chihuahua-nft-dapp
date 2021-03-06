// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
<<<<<<< HEAD:scripts/deploy.js
  const CryptoChihuahuas = await hre.ethers.getContractFactory("CryptoChihuahuas");
  const cryptoChihuahuas = await CryptoChihuahuas.deploy();

  await cryptoChihuahuas.deployed();

  console.log("CryptoChihuahuas NFT deployed to:", cryptoChihuahuas.address);
=======
  const CryptoChihuahuaNFT = await hre.ethers.getContractFactory("CryptoChihuahuaNFT");
  const cryptoChihuahuaNFT = await CryptoChihuahuaNFT.deploy();

  await cryptoChihuahuaNFT.deployed();

  console.log("CryptoChihuahuaNFT NFT deployed to:", cryptoChihuahuaNFT.address);
>>>>>>> 6e38e10bebddabf73c05c839b372b9936ba1130d:scripts/sample-script.js
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
