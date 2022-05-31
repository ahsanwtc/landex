const Landex = artifacts.require('Landex');

module.exports = function(_deployer) {
  _deployer.deploy(Landex, 'uri');
};
