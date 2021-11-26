var PethShop = artifacts.require("./PetShop.sol");

module.exports = function(deployer) {
  deployer.deploy(PethShop);
};