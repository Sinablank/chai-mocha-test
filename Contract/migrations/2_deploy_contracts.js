const Mocha = artifacts.require("Mocha");

module.exports = function(deployer) {
  deployer.deploy(Mocha);
};
