const Landex = artifacts.require('Landex');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Landex', () => {

  it('should assert true', async function () {
    await Landex.deployed();
    return assert.isTrue(true);
  });
});
