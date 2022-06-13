const { expectRevert } = require('@openzeppelin/test-helpers');
const Landex = artifacts.require('Landex');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Landex', accounts => {
  let landex = undefined;
  const [admin, user] = accounts;

  beforeEach(async () => {
    // landex = await Landex.deployed();
    landex = await Landex.new(/*'uri for metadata'*/);
  });

  it('deployed', async () => {
    const name = await landex.name();
    const symbol = await landex.symbol();
    assert(symbol === 'LEX');
    assert(name === 'Landex');
  });

  it('mints a new token', async () => {
    const idBefore = await landex.getCurrenttokenId();
    await landex.mint(user);
    const idAfter = await landex.getCurrenttokenId();

    assert(idBefore.toNumber() === 0);
    assert(idAfter.toNumber() === 1);
  });

  it('should NOT set and empty uri', async () => {
    await expectRevert(
      landex.setURI('', { from: admin }),
      'invalid uri'
    );
  });
});
