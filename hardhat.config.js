require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/G7xyzn3O5x4J33VBbedvPa5oSgmFPjJ5",
<<<<<<< HEAD
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
=======
      accounts: ["0x415b88f31c0d27aa6ba22928fd08c3ac83e8d58c8612fdbb25fe2d721f8bc1fd"]
>>>>>>> 6e38e10bebddabf73c05c839b372b9936ba1130d
    }
  },
};